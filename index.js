var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const http = require('http').Server(app);
var history = require('connect-history-api-fallback');



app.use(express.static('public'));
app.use(history({ verbose: true, index: '/' }));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});






http.listen(port,()=>{
console.log("Server started on "+ port);
});
