var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function(error, list) {
  if (!error) {
    list.forEach(function (item) {
      if (path.extname(item) == "." + process.argv[3])
        console.log(item);
    });
  }
});