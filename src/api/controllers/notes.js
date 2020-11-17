const note_service = require('../../services/notes')

function create_note(req, res) {
  let note = req.body
  note.user_id = req.api.user_id
  note.id = undefined
  let id = note_service.create_note(note)
  res.json({
    id
  })
}

function update_note(req, res) {
  let note = req.body
  note.user_id = req.api.user_id
  let fok = note_service.update_note(note, note.user_id)
  let status = (fok) ? (200) : (400)
  res.status(status).end()
}

function delete_note(req, res) {
  let note = req.body
  let fok = note_service.delete_note(note, req.api.user_id)
  let status = (fok) ? (200) : (400)
  res.status(status).end()
}

function get_notes_by_user(req, res) {
  let notes = note_service.get_notes_by_user(req.api.user_id)
  res.json({
    notes
  })
}

module.exports = {
  create_note,
  update_note,
  delete_note,
  get_notes_by_user
}
