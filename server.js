const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRouter = require('./route/notesRoute')
const app = express();

const port = 8008;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1',noteRouter)
app.get("/",function(req,res){
    res.send('Server starting.........');
});




app.listen(port,()=>{
    console.log("Server starting ......................");
});