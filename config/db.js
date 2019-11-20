const mongoose = require('mongoose');
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        reconnectTries: 30,
        reconnectInterval: 500,// in ms  
        reconnectTries: 30

    });

    console.log(`MongoDB connected:${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;