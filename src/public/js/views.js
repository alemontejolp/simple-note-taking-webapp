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
    
    hide: function() {
      this.element.style.display = 'none'
    },
    
    show: function() {
      this.element.style.display = 'block'
    }
  },

  notes_section: {
    element: document.getElementById('notes-section'),

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
  }
}
