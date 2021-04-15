const Note = require('../models/Note');

const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  req.flash('success_msg', 'Nota adicionada com sucesso');
  res.redirect('/notes');
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
  req.flash('success_msg', 'Nota atualizada com sucesso');
  res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id).lean();
  req.flash('success_msg', 'Nota excluída com sucesso');
  res.redirect('/notes');
};

module.exports = notesCtrl;
