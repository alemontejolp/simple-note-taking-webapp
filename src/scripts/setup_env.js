const fs = require('fs')
const datafiles = require('../../etc/datafiles')

try {
  fs.accessSync(datafiles.datadir)
} catch(err) {
  console.error(err.message)
  if(err.code == 'ENOENT') {
    let fok = fs.mkdirSync(datafiles.datadir)
    console.log('Data directory created')
  }
}