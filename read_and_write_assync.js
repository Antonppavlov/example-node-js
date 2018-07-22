var fs = require('fs')

fs.readFile('text.txt','utf8',function(err,data) {
    console.log(data);

    fs.writeFile('some_new_file.txt',`Привет мир ассинхронный!\n${data}`,function(err,data) {});


});
