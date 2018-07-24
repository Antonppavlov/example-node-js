var express = require('express');

var app = express();
const port = 3000;

app.listen(port);
app.set('view engine', 'ejs');

app.get("/", function (request,respons) {
  respons.sendFile(__dirname + '/html/index.html');
});

app.get("/about", function (request,respons) {
  respons.sendFile(__dirname + '/html/about.html');
});

app.get("/news/:id", function (request,respons) {
  let obj = {
          name: 'Anton',
          age: 29,
          array: ['зачем','я','этим','занимаюсь']};


  respons.render('news',{newsId : request.params.id, obj:obj});


});

console.log(`Запущен сервер локально, port: ${port}`);
