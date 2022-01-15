var generator = require('../util/generator');
var memStorage = require('../util/memoryStorage');
var model = require('../model/note.model');
exports.getAllNotes = function(req,res){
    var noteId = generator.generate();
    memStorage.store.setItem(noteId,"1st note id");
    var keys =memStorage.getKeys(memStorage.store);
    var values =memStorage.getValues(memStorage.store)
    var Note = model.Note;
    var noteObj = new Note(
        noteId,
        "Note 1",
        "Content1",
        "CreatedBy",
        "CreatedOn",

    );
    res.send("All Notes send ........."+JSON.stringify(noteObj));
}
exports.saveNotes = function(req,res){
    res.send("Save note  .........");
}
exports.updateNotes = function(req,res){
    res.send("update note .........");
}
exports.deleteNote = function(req,res){
    res.send("delete note .........");
}
