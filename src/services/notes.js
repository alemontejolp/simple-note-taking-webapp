const datafiles = require('../../etc/datafiles')
const fs = require('fs')

let count

/**
 * notesfile format: 
 * id,user_id,content
 */

 //NOTE: this is not going to work properly if 
 //text (in content) with new lines is introduced.
function get_notes() {
  //it can throw an exeption
  let notes = fs.readFileSync(datafiles.notes, {encoding:'utf8'})
  notes = notes.split('\n')
  notes.pop()
  return notes;
}

function get_notes_by_user(user_id) {
  let notes = get_notes()
  let selected = []
  for(let n of notes) {
    n = n.split('|')
    if(n[1] == user_id)
      selected.push({
        id: n[0],
        content: n[2]
      })
  }
  return selected
}

function read_note_quant() {
  try {
    let count = fs.readFileSync(datafiles.note_counter, { encoding:'utf8' })
    return parseInt(count)
  } catch(err) {
    fs.writeFileSync(datafiles.note_counter, '0', {encoding:'utf8'} )
    return 0;
  }
}

function write_note_quant(n) {
  fs.writeFileSync(datafiles.note_counter, n.toString(), 
    { encoding:'utf8', flag: 'w'} )
}

function create_note(note) {
  if(note.id) {
    let record = `${note.id}|${note.user_id}|${note.content}\n`
    fs.appendFileSync(datafiles.notes, record, {encoding: 'utf8'})
    return note.id
  }
  let record = `${count}|${note.user_id}|${note.content}\n`
  //it can throw an exeption
  fs.appendFileSync(datafiles.notes, record, {encoding: 'utf8'})
  write_note_quant(count + 1)
  return count++
}

function write_notes_array(notes) {
  let record = notes.join('\n') + '\n'
  fs.appendFileSync(datafiles.notes, record, 
    {encoding: 'utf8', flag: 'w'})
}

function delete_note(note, user_id) {
  let notes = get_notes()
  let i = 0;
  for(let n of notes) {
    n = n.split('|')
    if(n[0] == note.id && n[1] == user_id) {
      notes.splice(i, 1)
      write_notes_array(notes)
      return true
    }
    i++
  }
  return false
}

function update_note(note, user_id) {
  if(!note.id)
    throw new Error('note.id is required')
  let deleted = delete_note(note, user_id)
  let id = create_note(note)

  return (deleted && id == note.id)
}

count = read_note_quant()

module.exports = {
  create_note,
  delete_note,
  update_note,
  get_notes,
  get_notes_by_user
}
