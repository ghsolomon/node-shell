const fs = require('fs');
module.exports = function (done, fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    done(data);
  });
};
