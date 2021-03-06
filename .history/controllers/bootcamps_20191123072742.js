//@desc  Get all bootcamps
//@route GET  /api/v1/bootcamps
const Bootcamp = require('../models/bootcamp');



exports.getBootcamps = async (req, res, next) => {
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

        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }
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


exports.updateBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.params.body);

}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Deleted single  bootcamp:${req.params.id}` } });
}