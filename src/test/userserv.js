const user_service = require('../services/users')

let user = { username: "minnie", passwd: "qwerty" }

console.log(user_service.create_user(user))
console.log(user_service.get_user_id(user))
