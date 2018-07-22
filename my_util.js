var util = require('util')
var events = require('events')

var Car = function(model) {
    this.model = model;
};

util.inherits(Car, events.EventEmitter);

var bmw = new Car('BMV');
var audi = new Car('Audi');
var volvo = new Car('Volvo');


var cars = [bmw, audi, volvo];

cars.forEach(function(car) {
  car.on('speed',function(text) {
    console.log(`${car.model} скорость: ${text}`);
  })
})

bmw.emit('speed', 130);
audi.emit('speed', 90)
volvo.emit('speed', 190)
