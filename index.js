var fs = require('fs');

var myReadShort = fs.createReadStream('new-one-dr/war_and_peace.txt','utf8');
var myWriteShort = fs.createWriteStream('new-one-dr/war_and_peace_new.txt');

myReadShort.on('data', function (chunk) {
  console.log(chunk);
  myWriteShort.write(chunk);
});
