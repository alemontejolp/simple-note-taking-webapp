let signin_form = document.getElementById('signin-form')
let signup_form = document.getElementById('signup-btn')
let note_content = document.getElementById('note-content')

//Utils
function get_user_credentials() {
  return {
    username: signin_form.elements.username.value,
    passwd: signin_form.elements.passwd.value
  }
}

//Boot.
window.onload = function() {
  views._router.goto_login()

  //Go to notes list view after signing in.
  signin_form.addEventListener('submit', function(e) {
    e.preventDefault()
    let user = get_user_credentials()
    UserController.signin(user).then(function(data) {
      sessionStorage.setItem('token', data.session_token)
      views._router.goto_note_list()
    }).catch(function(err) {
      console.log(err)
      alert('Probably your credentials are wrong')
    })
  })

  //Go to notes list view after signing up.
  signup_form.addEventListener('click', function(e) {
    let user = get_user_credentials()
    UserController.create(user).then(function(data) {
      sessionStorage.setItem('token', data.session_token)
      views._router.goto_note_list()
    }).catch(function(err) {
      alert('This isn\'t good. :\'v')
      console.log(err)
    })
  })

  //Go to notes list view if all-notes button is pressed.
  views.notes_section.buttons.all_notes
    .addEventListener('click', function(e) {
      views._router.goto_note_list()
  })

  //Go to write note view if notes-section button is pressed.
  views.notes_section.buttons.write_note
    .addEventListener('click', function(e) {
      views._router.goto_write_note()
  })

  //Sign off and go to login view if sign off button is pressed.
  views.signoff_btn.element.addEventListener('click', function(e) {
    signin_form.elements.username.value = ''
    signin_form.elements.passwd.value = ''
    views._router.goto_login()
  })

  //Create the note, put it in the list and go to the list view
  //if save note button is pressed.
  views.create_note.buttons.save_note
    .addEventListener('click', function(e) {
      e.preventDefault()
      let note = { content: note_content.value }

      let id = sessionStorage.getItem('edit_id')
      if(id) {
        note.id = id
        sessionStorage.removeItem('edit_id')

        NoteController.update_note(note).then(function(data) {
          views._router.goto_note_list()
          note_content.value = ''
        })
      } else {
        NoteController.create(note).then(function(data) {
          note.id = data.id
          views.notes.append_note(note)
          views._router.goto_note_list()
          note_content.value = ''
        })
      }
  })
}
