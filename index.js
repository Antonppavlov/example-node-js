const fs = require('fs');
const http = require('http');

var server = http.createServer(function(require,response) {
  response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  var myReadShort = fs.createReadStream('html/index.html','utf8');
  myReadShort.pipe(response)
})

server.listen(3000,'127.0.0.1');
console.log("Сайт запущен по адрессу: 127.0.0.1:3000");
