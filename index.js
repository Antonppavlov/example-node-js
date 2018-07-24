const fs = require('fs');
const http = require('http');

var server = http.createServer(function(require,response) {
  response.writeHead(200,{'Content-Type':'aplication/json; charset=utf-8'});
  var obj = {model:"Audi", age: 1988, max_speed: 255};

  response.end(JSON.stringify(obj));
})

server.listen(3000,'127.0.0.1');
console.log("Сайт запущен по адрессу: 127.0.0.1:3000");
