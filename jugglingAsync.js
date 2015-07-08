var http = require('http');
var concat = require('concat-stream');

var returned = 0;
var strings = [];


http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');

  response.pipe(concat(function (data) {
    strings[0] = data;
    returned += 1;
    if (returned == 3)
      strings.forEach(function (item) {console.log(item);})
  }));

});

http.get(process.argv[3], function (response) {
  response.setEncoding('utf8');

  response.pipe(concat(function (data) {
    strings[1] = data;
    returned += 1;
    if (returned == 3)
      strings.forEach(function (item) {console.log(item);})
  }));

});

http.get(process.argv[4], function (response) {
  response.setEncoding('utf8');

  response.pipe(concat(function (data) {
    strings[2] = data;
    returned += 1;
    if (returned == 3)
      strings.forEach(function (item) {console.log(item);})
  }));

});
