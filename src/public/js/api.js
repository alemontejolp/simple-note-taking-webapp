let UserController = {
  domain: 'http://localhost:3000',

  create: async function(user) {
    let url = `${this.domain}/api/user`
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    })
    console.log(res.status)
    return res.json()
  },

  signin: async function(user) {
    let url = `${this.domain}/api/signin`
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    })
    console.log(res.status)
    return res.json()
  }
}

let NoteController = {
  domain: 'http://localhost:3000',

  create: async function(note) {
    console.log(note)
    let url = `${this.domain}/api/notes`

    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify(note)
    })
    console.log(res.status)
    return res.json()
  },

  get_notes: async function(note) {
    let url = `${this.domain}/api/notes`

    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')
      }
    })
    console.log(res.status)
    return res.json()
  },

  update_note: async function(note) {
    let url = `${this.domain}/api/notes`

    let res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify(note)
    })
    console.log(res.status)
  },
  
  delete_note: async function(note) {
    let url = `${this.domain}/api/notes`

    let res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify(note)
    })
    console.log(res.status)
  }
}
