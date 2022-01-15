var generator = require('../util/generator');
var memStorage = require('../util/memoryStorage');
exports.getAllNotes = function(req,res){
    var noteId = generator.generate();
    memStorage.store.setItem(noteId,"1st note id");
    var keys =memStorage.getKeys(memStorage.store);
    var values =memStorage.getValues(memStorage.store)

    res.send("All Notes send ........."+JSON.stringify(keys));
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
