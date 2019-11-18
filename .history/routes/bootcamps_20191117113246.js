const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(200).json({ success: true, data: { msg: 'show all bootcamps' } });
});
router.get('/:id', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(200).json({ success: true, data: { msg: `Retrieve a single  bootcamps:${req.params.id}` } });
});
router.post('/', (req, res) => {
    // res.json({ name: 'Farai' });
    // res.status(400).json({ success: false, data: { id: 1 } });
    res.status(201).json({ success: true, data: { msg: 'Created a bootcamp course' } });
});
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, data: { msg: `Updated  a bootcamp course :${req.params.id}` } });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, data: { msg: `Delete bootcamp:${req.params.id}` } });
});


module.exports = router;