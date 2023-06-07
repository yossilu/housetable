const allowedOrigins = require('../config/allowedOrigins');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Origin", origin);
        res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization,access-control-allow-origin');
    }
    next();
}

module.exports = credentials