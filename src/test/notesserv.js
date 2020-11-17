const note_service = require('../services/notes')

let user_id = 4

let note = {user_id, content: "hello world edited2" }

//note.id = note_service.create_note(note)
note.id = 10
console.log(note.id)

console.log(note_service.get_notes())

//console.log(note_service.delete_note(note, user_id))

//console.log(note_service.get_notes())

console.log(note_service.update_note(note, user_id))

console.log(note_service.get_notes())