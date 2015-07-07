var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function (err, contents) {
  if (!err) {
    var newLines = contents.split('\n').length - 1;
    console.log(newLines);
  }
});