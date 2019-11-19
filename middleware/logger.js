const logger = (req, res, next) => {
    // Logging the requested url resourse
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;