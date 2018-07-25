var express = require('express');
var bodyParser = require('body-parser')

var app = express();
const port = 3000;
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port);
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function (request,respons) {
  respons.render('index');
});

app.get("/about", function (request,respons) {
  respons.render('about');
});

// POST /login gets urlencoded bodies
app.post('/about', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log('email: ' + req.body.email);
    console.log('password: ' + req.body.password);
    console.log('checkbox: ' + req.body.checkbox);
    res.render('about')
})

app.get("/news/:id", function (request,respons) {
  let obj = {
          name: 'Anton',
          age: 29,
          array: ['зачем','я','этим','занимаюсь']};

          console.log(request.query);
  respons.render('news',{newsId : request.params.id, obj:obj});


});

console.log(`Запущен сервер локально, port: ${port}`);
