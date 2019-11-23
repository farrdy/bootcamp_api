//@desc  Get all bootcamps
//@route GET  /api/v1/bootcamps
const Bootcamp = require('../models/bootcamp');



exports.getBootcamps = (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ success: true, data: bootcamps });
    } catch (err) {
        res.status(400).json({ sucess: false });
    }
}


exports.getBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({ sucess: false, data: null });
    }

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