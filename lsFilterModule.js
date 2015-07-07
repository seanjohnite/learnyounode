var fs = require('fs');
var path = require('path');

module.exports = function (pathName, ext, callback) {
  fs.readdir(pathName, function (error, list) {
    if (error) {
      return callback(error);
    } else {
      return callback(null, list.filter(function(item) {
        return path.extname(item) == '.' + ext;
      }));
    }
  })
}