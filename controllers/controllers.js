const Note = require('../models/Note');

// Retrieve all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.render('index', { notes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new note
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.create({ title, content });
        res.status(201).json({ message: 'Note created successfully', note });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve a specific note by ID
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a note by ID
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const note = await Note.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createNote, getAllNotes, getNoteById, updateNote, deleteNote };