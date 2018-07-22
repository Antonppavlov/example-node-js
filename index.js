var fs = require('fs');

//Создание папки и запись в файл
fs.mkdir('new-one-dir', function() {
    fs.writeFile('new-one-dir/text.txt','Привет мир!',function() {
        console.log('Создание папки и запись в файл прошли успешно!!!');
    })
});

//Удаление файла
// fs.unlinkSync('new-one-dir/text.txt');

//Удаление директории
// fs.rmdirSync('new-one-dir');
