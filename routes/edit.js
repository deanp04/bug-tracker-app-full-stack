//This route will handle editing and deleting items, as well as rendering the edit page itself

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/remove/:id', editController.deleteTicket) //delete
router.get('/:id', editController.updateTicket) //close

module.exports = router