const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note