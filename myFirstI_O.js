var fs = require('fs');

var path = process.argv[2];

var newLines = fs.readFileSync(path).toString().split('\n').length - 1;

console.log(newLines);