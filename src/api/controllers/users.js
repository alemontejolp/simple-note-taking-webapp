const user_service = require('../../services/users')
const jwt = require('../../services/jwt')

function create_user(req, res) {
  let user = req.body
  let id = user_service.create_user(user)
  let token = jwt.encode({user_id: id})
  res.json({
    session_token: token
  })
}

function sigin(req, res) {
  let user = req.body
  let id = user_service.get_user_id(user)
  if(id < 0) {
    return res.status(400).end()
  }
  let token = jwt.encode({user_id: id})
  res.json({
    session_token: token
  })
}

module.exports = {
  create_user,
  sigin
}
