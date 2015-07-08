var http = require('http');

http.get(process.argv[2], function (response) {
  var bigString = "";

  response.on('data', function (data) {
    bigString += data.toString();
  });

  response.on('end', function () {
    console.log(bigString.length);
    console.log(bigString);
  });
});