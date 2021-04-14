const Note = require('../models/Note');

const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  res.send('<h1>new note</h1>');
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean();
  res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = (req, res) => {
  res.send(`<h1>render edit form id: ${req.params.id}</h1>`);
};

notesCtrl.updateNote = (req, res) => {
  res.send(`<h1>update note id: ${req.params.id}</h1>`);
};

notesCtrl.deleteNote = (req, res) => {
  res.send(`<h1>delete note id: ${req.params.id}</h1>`);
};

module.exports = notesCtrl;
