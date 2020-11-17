let signin_form = document.getElementById('signin-form')
let signup_form = document.getElementById('signup-btn')
let all_notes_btn = document.getElementById('all-notes-btn')
let write_note_btn = document.getElementById('write-note-btn')
let signoff_btn = document.getElementById('signoff-btn')
let save_note_btn = document.getElementById('save-note-btn')
let note_content = document.getElementById('note-content')

//utils
function get_user_credentials() {
  let user = {
    username: document.getElementById('username').value,
    passwd: document.getElementById('passwd').value
  }
  return user
}

function edit_note(id, content) {
  all_notes_btn.classList.remove('btn-green')
  write_note_btn.classList.add('btn-green')

  views.login.hide()
  views.notes.hide()
  views.create_note.show()

  note_content.value = content
  sessionStorage.setItem('edit_id', id)
}

function delete_note(id) {
  NoteController.delete_note({id}).then(function(data) {
    views.notes.show()
  })
}

(function() {
  //views.login.hide()
  views.notes_section.hide()
  views.notes.hide()
  views.create_note.hide()
  views.signoff_btn.hide()

  signin_form.addEventListener('submit', function(e) {
    e.preventDefault()
    let user = get_user_credentials()
    //signin
    UserController.signin(user).then(function(data) {
      sessionStorage.setItem('token', data.session_token)
      //ok
      views.login.hide()
      views.notes_section.show()
      views.notes.show()
      views.signoff_btn.show()
    }).catch(function(err) {
      alert('Probably your credentials are wrong')
    })
  })

  signup_form.addEventListener('click', function(e) {
    let user = get_user_credentials()
    //signup
    UserController.create(user).then(function(data) {
      sessionStorage.setItem('token', data.session_token)
      //ok
      console.log(data)
      views.login.hide()
      views.notes_section.show()
      views.notes.show()
      views.signoff_btn.show()
    }).catch(function(err) {
      console.log(err)
    })
  })

  all_notes_btn.addEventListener('click', function(e) {
    write_note_btn.classList.remove('btn-green')
    all_notes_btn.classList.add('btn-green')
    
    views.login.hide()
    views.create_note.hide()
    views.notes.show()
  })

  write_note_btn.addEventListener('click', function(e) {
    all_notes_btn.classList.remove('btn-green')
    write_note_btn.classList.add('btn-green')

    views.login.hide()
    views.notes.hide()
    views.create_note.show()
  })

  signoff_btn.addEventListener('click', function(e) {
    views.create_note.hide()
    views.notes.show()
    views.notes_section.hide()
    views.login.show()
    views.signoff_btn.hide()

    document.getElementById('username').value = ''
    document.getElementById('passwd').value = ''
  })

  save_note_btn.addEventListener('click', function(e) {
    e.preventDefault()
    let content = note_content.value
    let note = {content}

    let id = sessionStorage.getItem('edit_id')
    if(id) {
      note.id = id
      sessionStorage.removeItem('edit_id')

      NoteController.update_note(note).then(function(data) {
        views.create_note.hide()
        views.notes.show()
        note_content.value = ''
        write_note_btn.classList.remove('btn-green')
        all_notes_btn.classList.add('btn-green')
      })
    } else {
      NoteController.create(note).then(function(data) {
        note.id = data.id
        
        views.notes.append_note(note)
        views.create_note.hide()
        views.notes.show()
        note_content.value = ''
        write_note_btn.classList.remove('btn-green')
        all_notes_btn.classList.add('btn-green')
      })
    }
  })
})()
