const jwt = require('../services/jwt')

let payload = {
  user_id: 1
}

let token = jwt.encode(payload)
console.log(token);

console.log(jwt.decode(token))
