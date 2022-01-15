var generator = require('../util/generator');
var memStorage = require('../util/memoryStorage');
var model = require('../model/note.model');
exports.getAllNotes = function(req,res){
    // var noteId = generator.generate();
    // memStorage.store.setItem(noteId,"1st note id");
    // var keys =memStorage.getKeys(memStorage.store);
     var values =memStorage.getValues(memStorage.store);
     res.status(200).send(JSON.stringify(values));
    // var Note = model.Note;
    // var noteObj = new Note(
       //  noteId,
       //  "Note 1",
         // "Content1",
        // "CreatedBy",
         // "CreatedOn",

   // );

}
exports.saveNotes = function(req,res){
    var seqId = generator.generate();
    var createdBy = "Admin";
    var createdOn = new Date();
    var title = req.body.title;
    var content = req.body.content;
    if (!title || !content){
        return res.status(500).send({error:'Title & content must not be empty'});
    }
    var Note =  model.Note;
    var noteObj = new Note(
        seqId,
        title,
        content,
        createdBy,
        createdOn
    );
    memStorage.store.setItem(seqId,noteObj);

    res.status(201).send("Successfully saved");



}
exports.updateNotes = function(req,res){
    res.send("update note .........");
}
exports.deleteNote = function(req,res){
    res.send("delete note .........");
}
