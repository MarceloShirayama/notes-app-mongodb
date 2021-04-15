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

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render('notes/edit-note', { note });
};

notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(
    req.params.id, { title, description },
  );
  // res.send(`<h1>update note id: ${req.params.id}</h1>`);
  res.redirect('/notes');
};

notesCtrl.deleteNote = (req, res) => {
  res.send(`<h1>delete note id: ${req.params.id}</h1>`);
};

module.exports = notesCtrl;
