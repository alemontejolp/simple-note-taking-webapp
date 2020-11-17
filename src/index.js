const app = require('./app')
const common = require('../etc/common')

app.listen(common.port, function() {
  console.log('---------------------------------------')
  console.log(`Server running on port: ${common.port}`)
  console.log('---------------------------------------')
})