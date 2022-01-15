var MemoryStorage = require('memorystorage');
var store = new MemoryStorage('note-app');
exports.getKeys =(store)=>{
    var keys = [];
    for(var i=0;i<store.length;i++){
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
}

exports.getValues=(store)=>{
    var values= [];
    for (var i=0; i<store.length;i++){
        var key   = store.key(i);
        var value = store.getIem(key);
        value.push(value);
    }
    return values;
}







exports.store = store