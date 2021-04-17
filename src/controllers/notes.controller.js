const Note = require('../models/Note');

const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const user = req.user.id;
  const newNote = new Note({ title, description, user });
  await newNote.save();
  req.flash('success_msg', `Nota ${title} adicionada com sucesso`);
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note
    .find({ user: req.user.id }).sort({ createdAt: 'desc' }).lean();
  res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  const userNote = note.user;
  if (userNote !== req.user.id) {
    req.flash('error_msg', 'Não autorizado!!!');
    return res.redirect('/notes');
  }
  return res.render('notes/edit-note', { note });
};

notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(
    req.params.id, { title, description },
  );
  req.flash('success_msg', `Nota da ${title} atualizada com sucesso`);
  res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id).lean();
  req.flash('success_msg', 'Nota excluída com sucesso');
  res.redirect('/notes');
};

module.exports = notesCtrl;
