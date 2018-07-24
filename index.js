const fs = require('fs');
const http = require('http');

const url = "127.0.0.1";
const port = 3000;

var server = http.createServer(function(require,response) {
  response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

  if(require.url === "/index" || require.url === "/"){
    fs.createReadStream(__dirname + '/html/index.html')
    .pipe(response);
  }else if(require.url === "/about"){
    fs.createReadStream(__dirname + '/html/about.html')
    .pipe(response);
  }
  else {
      fs.createReadStream(__dirname + '/html/404.html')
      .pipe(response);
  }

})

server.listen(port,url);
console.log(`Запущен сервер по адресу: ${url}:${port}`);
