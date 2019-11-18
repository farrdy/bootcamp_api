const express = require('express');

const {
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    createBootcamp,
    deleteBootcamp

} = require('../controllers/bootcamps')
const router = express.Router();

router.route('/').get(getBootcamps)
    .post(createBootcamp);


module.exports = router;
