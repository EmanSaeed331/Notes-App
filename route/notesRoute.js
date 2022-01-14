const express = require("express")
const router = express.Router()

router.get("/notes",function(req,res){
    res.send('Get All Notes');
})


module.exports = router