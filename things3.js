var array_counter = function(array) {
   return "В массиве находится "+ array.length + " элементов"
}

var multiply = function (x,y) {
  return `${x} умножить на ${y} равняеться ${x * y}`;
}

var some_value = 45;

module.exports = {
  array_counter:array_counter,
  multiply:multiply,
  some_value:some_value
};
