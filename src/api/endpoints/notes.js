const router = require('express').Router()
const noteflows = require('../flows/notes')

router.post('/notes', noteflows.create_note)
router.put('/notes', noteflows.update_note)
router.delete('/notes', noteflows.delete_note)
router.get('/notes', noteflows.get_notes_by_user)

module.exports = router
