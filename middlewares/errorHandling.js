const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    // Log the error for debugging purposes
    console.error(`[Error] ${status} - ${message}`);
    // Respond to the client
    res.status(status).json({ status, message });
};

const logRequests = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = { errorHandler, logRequests };