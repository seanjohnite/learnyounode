var filterLs = require('./lsFilterModule');

var filtered = filterLs(process.argv[2], process.argv[3], function (error, data) {
  if (!error) {
    data.forEach(function(item) {
      console.log(item);
    });
  }
})