var express = require('express');

var app = express();
const port = 3000;

app.listen(port);

app.get("/", function (request,respons) {
  respons.send('This is home');
});

app.get("/news", function (request,respons) {
  respons.send('This is news');
});

app.get("/news/:name/:id", function (request,respons) {
  respons.send(`Name is:${request.params.name}, Id is: ${request.params.id}`);
});

console.log(`Запущен сервер локально, port: ${port}`);
