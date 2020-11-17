const router = require('express').Router()
const userflows = require('../flows/users')

router.post('/user', userflows.create_user)
router.post('/signin', userflows.sigin)

module.exports = router
