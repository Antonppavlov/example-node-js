var events = require('events')

var myEmit = new events.EventEmitter();

myEmit.on('some_emit', function(text){
    console.log(text);
})


myEmit.emit('some_emit', 'Обработчик сработал')
