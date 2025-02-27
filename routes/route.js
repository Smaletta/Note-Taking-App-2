const express = require('express');
const router = express.Router();
const { findNotesbyUserId, createNote, getAllNotes, getNoteById, updateNote, deleteNote } = require('../controllers/controllers');
const {isAuthenticated} = require('../middlewares/auth');

// Splash route: Display splash page until logged in

router.get('/', (req, res) => {
    res.render('index', { notes: [] });
});

// User logged in route: Authenticate user and Display Minimized Notes and Controls to create/update/delete notes

router.get('/user/:id', isAuthenticated, (req, res) => {
    findNotesbyUserId(req, res); 
});

// Create route: Post route to create a new note

router.post('/create', isAuthenticated, (req, res) => {
    createNote(req, res); 
});

// View route: Display note with options to update or delete

router.get('/note/:id', isAuthenticated, (req, res) => {
    getNoteById(req, res); 
});

module.exports = router;