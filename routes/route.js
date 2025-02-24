const express = require('express');
const router = express.Router();
const { createNote, getAllNotes, getNoteById, updateNote, deleteNote } = require('../controllers/controllers');

// Home route: Display Minimized Notes and Controls to create/update/delete notes

router.get('/', getAllNotes);

// Create route: Display form to create a new note

router.post('/create', createNote);

// View route: Display note with options to update or delete

router.get('/note/:id', getNoteById);

module.exports = router;