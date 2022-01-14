const express = require("express")
const router = express.Router()
var noteController = require('../controller/notesController')

router.get("/notes",noteController.getAllNotes)
router.post("/notes/save",noteController.saveNotes)
router.put("/notes/update",noteController.updateNotes)
router.delete("/notes/delete",noteController.deleteNote)



module.exports = router