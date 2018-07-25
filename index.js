var express = require('express');

var app = express();
const port = 3000;

app.listen(port);
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function (request,respons) {
  respons.render('index');
});

app.get("/about", function (request,respons) {
  respons.render('about');
});

app.get("/news/:id", function (request,respons) {
  let obj = {
          name: 'Anton',
          age: 29,
          array: ['зачем','я','этим','занимаюсь']};


  respons.render('news',{newsId : request.params.id, obj:obj});


});

console.log(`Запущен сервер локально, port: ${port}`);
