var http = require('http')

var returned = 0;
var strings = [];

var httpGet = function (index) {
  http.get(process.argv[index + 2], function (response) {
    var bigStr = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bigStr += data;
      returned ++;
    });

    response.on('end', function () {
      if (returned == 3)
        strings.forEach(function (item) { console.log(item); });
    })
  })
};

for (var i = 0; i < 3; i++) {
  httpGet(i);
}