const fs = require('fs');
const http = require('http');

var server = http.createServer(function(require,response) {
  response.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
  var myReadShort = fs.createReadStream('new-one-dir/war_and_peace.txt','utf8');
  myReadShort.pipe(response)
})

server.listen(3000,'127.0.0.1');
