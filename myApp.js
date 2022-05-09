let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
bGround.log("Hello world");
app.get("/", function(req, res){res.send("Hello Express")});




































 module.exports = app;
