var generator = require('../util/generator');
exports.getAllNotes = function(req,res){
    var noteId = generator.generate();
    res.send("All Notes send ........."+noteId);
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
