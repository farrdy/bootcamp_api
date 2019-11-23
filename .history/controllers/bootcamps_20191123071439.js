//@desc  Get all bootcamps
//@route GET  /api/v1/bootcamps
const Bootcamp = require('../models/bootcamp');



exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: 'show all bootcamps', hello: req.hello } });
}


exports.getBootcamp = (req, res, next) => {


    res.status(200).json({ success: true, data: { msg: `Retrieve a single  bootcamps:${req.params.id}` } });
}


//@desc Create a new bootcamp
//@route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = async (req, res, next) => {
    try {

        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });

    } catch (err) {
        res.status(400).json({ succes: false });
    }

}


exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Updated  a bootcamp course :${req.params.id}` } });
}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Deleted single  bootcamp:${req.params.id}` } });
}