const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    titlePreview: {
        type: String, trim: true
    },
    content: {
        type: String, required: true, trim: true
    },
    preview: {
        type: String, trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true
    }
    
}, {timestamps: true});

// pre middleware to save preview text from title
noteSchema.pre('save', function (next) {
    this.titlePreview = this.title.substring(0, 50);
    next();
});

// pre middleware to save preview text from content
noteSchema.pre('save', function (next) {
    this.preview = this.content.substring(0, 100);
    next();
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note