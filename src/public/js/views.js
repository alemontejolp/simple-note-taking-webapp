let views = {
  login: {
    element: document.getElementById('login'),

    hide: function() {
      this.element.style.display = 'none'
    },
    
    show: function() {
      this.element.style.display = 'block'
    }
  },
  
  notes: {
    element: document.getElementById('notes-view'),
    
    hide: function() {
      this.element.style.display = 'none'
    },
    
    show: function() {
      this.element.style.display = 'block'
      NoteController.get_notes().then(function(data) {
        console.log(data)
        views.notes.re_render_notes(data.notes)
      })
    },

    append_note: function(note) {
      this.element.innerHTML += create_note(note)
    },

    re_render_notes: function(notes) {
      this.element.innerHTML = ''
      for(let n of notes) {
        this.append_note(n)
      }
    }
  },
  
  create_note: {
    element: document.getElementById('note-create-view'),

    buttons: {
      save_note: document.getElementById('save-note-btn')
    },
    
    hide: function() {
      this.element.style.display = 'none'
    },
    
    show: function() {
      this.element.style.display = 'block'
    }
  },

  notes_section: {
    element: document.getElementById('notes-section'),
    
    buttons: {
      all_notes: document.getElementById('all-notes-btn'),
      write_note: document.getElementById('write-note-btn')
    },

    hide: function() {
      this.element.style.display = 'none'
    },

    show: function() {
      this.element.style.display = 'block'
    }
  },

  signoff_btn: {
    element: document.getElementById('signoff-btn'),

    hide: function() {
      this.element.style.display = 'none'
    },

    show: function() {
      this.element.style.display = 'inline'
    }
  },

  _router: {
    goto_login: function() {
      views.create_note.hide()
      views.notes.hide()
      views.notes_section.hide()
      views.login.show()
      views.signoff_btn.hide()
    },

    goto_note_list: function() {
      views.login.hide()
      views.notes_section.show()
      views.notes.show()
      views.create_note.hide()
      views.signoff_btn.show()

      views.notes_section.buttons.write_note
        .classList.remove('btn-green')
      views.notes_section.buttons.all_notes
        .classList.add('btn-green')
    },

    goto_write_note: function() {
      views.login.hide()
      views.notes_section.show()
      views.notes.hide()
      views.create_note.show()
      views.signoff_btn.show()

      views.notes_section.buttons.write_note
        .classList.add('btn-green')
      views.notes_section.buttons.all_notes
        .classList.remove('btn-green')
    }
  }
}
