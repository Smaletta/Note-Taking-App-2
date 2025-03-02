const express = require('express');
const router = express.Router();
const { findNotesbyUserId, createNote, getNoteById, updateNote, deleteNote } = require('../controllers/controllers');
const {isAuthenticated} = require('../middlewares/auth');

// Splash route: Display splash page until logged in

router.get('/', (req, res) => {
    res.render('index', { notes: [], loggedIn: false });
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

// Update route: Post route to update a note

router.put('/update/:id', isAuthenticated, (req, res) => {
    updateNote(req, res); 
});

// Delete route: Post route to delete a note

router.delete('/delete/:id', isAuthenticated, (req, res) => {
    deleteNote(req, res); 
});

router.get('/favicon.ico', (req, res) => {
    res.status(204).json();
});

module.exports = router;