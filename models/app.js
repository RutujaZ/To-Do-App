const express = require("express")
const app = express()
port = 5000;
const path = require("path");
const homeRoute = require("../routes/homeRoute")
const infoRoute = require("../routes/infoRoute");

//for flash messages
var session =require("express-session");
var flash = require("connect-flash");

//Getting the database connection
require("./dbConn")
//Static Paths
staticPath = path.join(__dirname,"../static")
app.use("/static",express.static(staticPath))
app.use(express.urlencoded())

//using the flash messages
app.use(session({
    secret:'secret',
    cookie : {maxAge : 60000},
    resave : false,
    saveUninitialized : false
}))
app.use(flash());
//Setting the view engine 
viewPath = path.join(__dirname,"../views")
app.set("view engine","ejs")
app.set("views",viewPath)

//Page Routes
app.use("/",homeRoute)
app.use("/",infoRoute)

//Listening to Server
app.listen(port,()=>{
    console.log("Server started at port 5000....")
})