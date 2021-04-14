const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
  res.send('<h1>note add</h1>');
};

notesCtrl.createNewNote = (req, res) => {
  res.send('<h1>new note</h1>');
};

notesCtrl.renderNotes = (req, res) => {
  res.send('<h1>render notes</h1>');
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
