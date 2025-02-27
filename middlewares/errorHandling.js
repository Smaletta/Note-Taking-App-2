const errorHandler = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
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