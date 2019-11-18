const express = require('express');

const {
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    createBootcamp,
    deleteBootcamp

} = require('../controllers/bootcamps')
const router = express.Router();


module.exports = router;
