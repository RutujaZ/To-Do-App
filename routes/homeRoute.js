const express = require("express");
const router = express.Router()
const bodyparser = require("body-parser") 

const mongoose = require("mongoose");
var taskSchema = mongoose.Schema({
    todo: String,
    reg_time: {type: Date, default: Date.now}
})

var Task = mongoose.model("Task",taskSchema);

router.get("/",(req,res)=>{
    Task.find({},function(err,tasks){
        res.render("home",{taskList:tasks,msg:req.flash('msg')})
    })
})

router.post("/home",(req,res)=>{
    var data = new Task(req.body)
    if(data.todo=="")
    {
        req.flash('msg','Nothing to add');
        res.redirect("/")
    }
    else{
        data.save().then(()=>{
            res.redirect("/");
        }).catch((err)=>{
            console.log(err);
        })
    }
})

router.get("/home/delete/:id",(req,res)=>{
    Task.findByIdAndRemove(req.params.id,(err)=>{
        if(!err){res.redirect("/");}
        else{console.log(err);}
    })
})
module.exports = router;
