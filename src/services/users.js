const datafiles = require('../../etc/datafiles')
const fs = require('fs')

let count

/**
 * userfile format: 
 * id,username,passwd
 */

function get_users() {
  //it can throw an exeption
  let users = fs.readFileSync(datafiles.users, {encoding:'utf8'})
  users = users.split('\n')
  users.pop()
  return users;
}

function count_users() {
  try {
    let users = get_users()
    return users.length
  } catch(err) {
    return 0;
  }
}

function create_user(user) {
  let record = `${count}|${user.username}|${user.passwd}\n`
  //it can throw an exeption
  fs.appendFileSync(datafiles.users, record, {encoding: 'utf8'})
  return count++
}

function get_user_id(user) {
  let users = get_users()
  for(let u of users) {
    u = u.split('|')
    if(u[1] == user.username && u[2] == user.passwd)
      return u[0]
  }
  return -1
}

count = count_users()

module.exports = {
  create_user,
  get_user_id
}
