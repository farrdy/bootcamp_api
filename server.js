
const express = require('express');//route files
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger')
const morgan = require('morgan');
const dotenv = require('dotenv');

const colors = require('colors')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

const app = express();


// app.use(logger);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//Handle unhandled promise rejections

process.on('unhandlesRejection', (err, promise) => {
    console.log(`Error:${err.message}`.red);
    server.close(() => process.exit(1));
})