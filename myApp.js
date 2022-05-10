let express = require('express');
require('dotenv').config()
let app = express();
app.get("/", function(req, res){res.sendFile('/views/index.html' , { root : __dirname })});
app.use('/public' , express.static(__dirname + '/public'));

// app.get("/json", function(req, res){ 
//     if (process.env.MESSAGE_STYLE == "uppercase"){
//         res.json({"message": "HELLO JSON" })
//     }else {
//         res.json({"message": "Hello json" })
//     }
// })

app.use(function(req, res, next){
    console.log(req.method, req.path - req.ip);
    next();
})


































 module.exports = app;
