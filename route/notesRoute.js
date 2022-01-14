const express = require("express")
const router = express.Router()
var noteController = require('../controller/notesController')

router.get("/notes",noteController.getAllNotes)


module.exports = router