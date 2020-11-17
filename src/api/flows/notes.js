const notesctr = require('../controllers/notes')
const validation = require('../../middlewares/validation')

module.exports = {
  create_note: [
    validation.auth,
    notesctr.create_note
  ],
  
  update_note: [
    validation.auth,
    notesctr.update_note
  ],

  delete_note: [
    validation.auth,
    notesctr.delete_note
  ],

  get_notes_by_user: [
    validation.auth,
    notesctr.get_notes_by_user
  ]
}
