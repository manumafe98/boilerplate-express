let express = require('express');
require('dotenv').config()
let app = express();

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();

},
function(req, res){
    res.send({time: req.time})
})

// app.use(function (req, res, next){
//     console.log(req.method + " " + req.path  + " - "  + req.ip);
//     next();
// })


app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});

app.use('/public' , express.static(__dirname + '/public'));

// app.get("/json", function(req, res){ 
//     if (process.env.MESSAGE_STYLE == "uppercase"){
//         res.json({"message": "HELLO JSON" })
//     }else {
//         res.json({"message": "Hello json" })
//     }
// })



































 module.exports = app;
