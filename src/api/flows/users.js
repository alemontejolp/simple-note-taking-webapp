const userctl = require('../controllers/users')

module.exports = {
  create_user: [userctl.create_user],
  sigin: [userctl.sigin]
}
