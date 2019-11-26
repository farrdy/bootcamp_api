const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

//load models

const Bootcamp = require('./models/bootcamp');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    reconnectTries: 30,
    reconnectInterval: 500,// in ms  
    reconnectTries: 30
});

//read JSON files 
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

//import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);

        console.log('Data imported...'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(err);
    }
}
//Delete data 
//import into DB
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();

        console.log('Data destroyed...'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(err);
    }
}

if (process.argv[2] === '-i') {

    importData();
}
else if (process.argv[2] === '-d') {
    deleteData();
}