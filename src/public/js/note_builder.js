//Create the HTML code of a note, with the data supplied.
function create_note(note) {
  return `
  <div class="bg-card m-2p">
    <p>${note.content}</p>
    <div class="label-separation text-right">
      <button class="btn btn-danger" onclick="delete_note('${note.id}')">Delete</button>
      <button class="btn btn-purple" onclick="edit_note('${note.id}', '${note.content}')">Edit</button>
    </div>
  </div>
  `
}

//Go to the create note view and put the note content in the text box.
function edit_note(id, content) {
  views._router.goto_write_note()
  note_content.value = content
  sessionStorage.setItem('edit_id', id)
}

//Ask for a note to be deleted.
function delete_note(id) {
  NoteController.delete_note({id}).then(function(data) {
    views.notes.show()
  })
}
