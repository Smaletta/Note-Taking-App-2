const User = require('../models/User');
const Note = require('../models/Note');
const jwt = require('jsonwebtoken');

require('dotenv').config();
// Retrieve all notes by a user

const findNotesbyUserId = async (req, res) => {
    try {

        if (req.user.username !== req.params.id) {
            const error = new Error("Unauthorized: Incorrect username");
            error.statuscode = 401;
            res.render('index', { error, notes: [] });
            return (error);
          }

        const notes = await Note.find({ user: req.user.id });
        console.log(notes);
        res.render('index', { notes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new note associated with a user 
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const user = req.user.id;
        const note = await Note.create({ title, content, user });
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

module.exports = { findNotesbyUserId, createNote, getNoteById, updateNote, deleteNote };