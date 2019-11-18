
const express = require('express');

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(200).json({ success: true, data: { msg: 'show all bootcamps' } });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(200).json({ success: true, data: { msg: `Retrieve a single  bootcamps:${req.params.id}` } });
});
app.post('/api/v1/bootcamps', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(201).json({ success: true, data: { msg: 'Created a bootcamp course' } });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, data: { msg: `Updated  a bootcamp course :${req.params.id}` } });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, data: { msg: `Delete bootcamp:${req.params.id}` } });
});


const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));