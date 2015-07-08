var http = require('http');
var concat = require('concat-stream');

var returned = 0;
var strings = [];

for (var i = 2; i < 5; i++) {
  (function (j) {
    http.get(process.argv[i], function (response) {
      response.setEncoding('utf8');

      response.pipe(concat(function (data) {
        strings[j] = data;
        returned += 1;
        if (returned == 3)
          strings.forEach(function (item) { console.log(item); });
      }));

    });
  })(i - 2);
}
