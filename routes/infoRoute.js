const express = require("express");
const router = express.Router()

router.post("/info",(req,res)=>{
    var data = req.body.name;
    res.send(`Helleewww ${data}`);
})

router.get("/info/:id",(req,res)=>{
    res.render("info")
})
module.exports = router;
