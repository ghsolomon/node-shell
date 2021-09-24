const fs = require("fs");
module.exports = function (fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    process.stdout.write(data + "\nprompt > ");
  });
};
