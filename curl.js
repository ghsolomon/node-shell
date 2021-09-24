const request = require('request');
module.exports = function (done, url) {
  request(url, function (error, response, body) {
    if (error) {
      throw error;
    } else {
      done(body);
    }
  });
};
