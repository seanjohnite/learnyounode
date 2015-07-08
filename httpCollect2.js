var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function (response) {

  response.pipe(concat(function (contents) {
    contents = contents.toString();
    console.log(contents.length);
    console.log(contents);
  }));

});