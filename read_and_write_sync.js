var fs = require('fs')

var file_reader = fs.readFileSync('text.txt','utf8');
console.log(file_reader);


var message = `Привет мир синхронный!\n${file_reader}`;


fs.writeFileSync('some_new_file.txt',message )
