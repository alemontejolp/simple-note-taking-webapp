const jwt = require('../services/jwt')

function auth(req, res, next) {
  let token = req.headers.authorization
  if(!token) {
    return res.status(403).end()
  }

  const { user_id } = jwt.decode(token)
  req.api.user_id = user_id
  next()
}

module.exports = {
  auth
}
