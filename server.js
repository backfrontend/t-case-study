var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/data'));

app.get('/',function(req,res){
  res.sendFile('/index.html');
});

app.listen(3000);

console.log("Running at Port 3000");
