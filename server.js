var express = require('express');
//var partials = require('express-partials');

var app = express();

var port = process.env.PORT || 3468;

app.listen(port);

console.log('Server now listening on port ' + port);
 

 app.get('/', function (req, res) {
   res.send("hello world")
 });