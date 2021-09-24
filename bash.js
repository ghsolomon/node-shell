const ls = require('./ls');
const pwd = require('./pwd');
const cat = require('./cat');
const curl = require('./curl');

const done = (output) => {
  process.stdout.write(output + '\nprompt > ');
};

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' '); // remove the newline

  if (cmd[0] === 'pwd') {
    pwd(done);
  }

  if (cmd[0] === 'ls') {
    ls(done);
  }

  if (cmd[0] === 'cat') {
    cat(done, cmd[1]);
  }

  if (cmd[0] === 'curl') {
    curl(done, cmd[1]);
  }
});
