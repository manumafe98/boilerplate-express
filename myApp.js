let express = require('express');
require('dotenv').config()
let app = express();

//Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();

},
function(req, res){
    res.send({time: req.time})
})

//Get Route Parameter Input from the Client
app.get('/:word/echo', function(req, res){
    const word = req.params.word;
    res.json({echo: word})
})

//Get Query Parameter Input from the Client
app.get('/name', function(req, res){
    const firstname = req.query.first
    const lastname = req.query.last

    res.json({name: `${firstname} ${lastname}`})
})

//Implement a Root-Level Request Logger Middleware
app.use(function (req, res, next){
    console.log(req.method + " " + req.path  + " - "  + req.ip);
    next();
})


app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});

app.use('/public' , express.static(__dirname + '/public'));

//Use the .env File --> require('dotenv').config() y tuvimos que instalar npm install dotenv
app.get("/json", function(req, res){ 
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON" })
    }else {
        res.json({"message": "Hello json" })
    }
})



































 module.exports = app;
