const express = require('express')
const body_parser = require('body-parser')
const app = express()
const setup = require('./middlewares/setup')

const user_api = require('./api/endpoints/users')
const note_api = require('./api/endpoints/notes')

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: false}))
app.use(setup.set_api_obj)

app.use(express.static('src/public'))

app.use('/api', user_api)
app.use('/api', note_api)
app.use('*', function(req, res) {
  res.status(404).send('Sorry, path not found.')
})

module.exports = app;