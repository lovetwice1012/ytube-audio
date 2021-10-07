var express = require('express');
const fs = require('fs');
const ytdl = require('ytdl-core');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/download', function(request, response) {
　var url = req.query.url;
  var resHeader = {
     'Content-Type' : 'audio\mp3',
     'Content-Disposition' : 'attachment; filename="'+req.query.url+'.mp3"'
  };
  response.writeHead(200, resHeader );
　ytdl(url).pipe(response);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});