let express = require('express');
let bodyParser = require('body-parser');
require('dotenv').config()
let app = express();

//Serve an HTML File
app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});

//Serve Static Assets
app.use('/public' , express.static(__dirname + '/public'));

//Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//Use the .env File --> require('dotenv').config() y tuvimos que instalar npm install dotenv
app.get("/json", function(req, res){ 
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON" })
    }else {
        res.json({"message": "Hello json" })
    }
})


//Get Data from POST Requests
app.post('/name', function(req, res){
    const firstname = req.body.first
    const lastname = req.body.last

    res.json({name: `${firstname} ${lastname}`})
}) 




// POST (sometimes PUT) - Create a new resource using the information sent with the request,
// GET - Read an existing resource without modifying it,
// PUT or PATCH (sometimes POST) - Update a resource using the data sent,
// DELETE => Delete a resource.





























 module.exports = app;
