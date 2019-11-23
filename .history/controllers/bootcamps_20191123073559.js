//@desc  Get all bootcamps
//@route GET  /api/v1/bootcamps
const Bootcamp = require('../models/bootcamp');



exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ success: true, data: bootcamps });
    } catch (err) {
        res.status(400).json({ success: false });
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
        res.status(400).json({ sucsess: false, data: null });
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
        res.status(400).json({ success: false });
    }
}

//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps/
// @access Private

exports.updateBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: True
    });
    if (!bootcamp) {
        res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });

}


//@desc Delete  a bootcamp
//@route DELETE /api/v1/bootcamps/:id
// @access Private


exports.deleteBootcamp = (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id, req.body, {
        new: true,
        runValidators: True
    });
    if (!bootcamp) {
        res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
}