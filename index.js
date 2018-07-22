var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request,response) {

    console.log(`URL по которому быз запрос: ${request.url}`);

    response.writeHead(200,
      {'Content-Type': 'text/plain; charset=utf-8'}
    )

    response.end(fs.readFileSync('new-one-dir/text.txt','utf8'));
});


server.listen(3000, '127.0.0.1');
console.log('Занял адрес 127.0.0.1:3000');
