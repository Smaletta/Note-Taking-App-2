// Middleware to find notes associated with user id

const User = require('../models/User');
const Note = require('../models/Note');

const findNotesbyUserId = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        req.notes = Note.find({ user: user._id });
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = findNotesbyUserId;