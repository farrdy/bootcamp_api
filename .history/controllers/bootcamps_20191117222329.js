//@desc  Get all bootcamps
//@route GET  /api/v1/bootcamps

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: 'show all bootcamps' } });
}


exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Retrieve a single  bootcamps:${req.params.id}` } });
}


exports.createBootcamp = (req, res, next) => {
    res.status(201).json({ success: true, data: { msg: 'Created a bootcamp course' } });
}


exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Updated  a bootcamp course :${req.params.id}` } });
}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: { msg: `Retrieve a single  bootcamps:${req.params.id}` } });
}