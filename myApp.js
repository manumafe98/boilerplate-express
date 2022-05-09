let express = require('express');
let app = express();
app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});
app.use('/public' , express.static(__dirname + '/public'));
app.get("/json", function(req, res){res.json({"message": "Hello json"})})



































 module.exports = app;
