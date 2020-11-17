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
