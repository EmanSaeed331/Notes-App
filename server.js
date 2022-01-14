const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = 8880;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.send('Server starting.........');
});




app.listen(port,()=>{
    console.log("Server starting ......................");
});