let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
bGround.log("Hello world");
app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});




































 module.exports = app;
