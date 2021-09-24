const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    pwd();
  }

  if (cmd === "ls") {
    ls();
  }

  if (cmd.split(" ")[0] === "cat") {
    cat(cmd.split(" ")[1]);
  }
});
