const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todoDB",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log("Cannot connect .."+err);
})