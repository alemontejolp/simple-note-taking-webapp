const common = require('../../etc/common')
const jwt = require('jwt-simple')

function encode(payload) {
  return jwt.encode(payload, common.secret)
}

function decode(token) {
  return jwt.decode(token, common.secret)
}

module.exports = {
  encode,
  decode
}
