
const express = require('express');

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(200).json({ success: true, data: { msg: 'show all bootcamps' } });
});
app.post('/api/v1/bootcamps', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(201).json({ success: true, data: { msg: 'Created a bootcamp course' } });
});


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));