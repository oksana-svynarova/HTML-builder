const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const stream = fs.createWriteStream(path.join(__dirname,'text.txt'), 'utf-8');

stdout.write('Please, enter the text!\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Good bye!');
    exit();
  }
  stream.write(data);
});

process.on('SIGINT', () => {
  stdout.write('Good bye!');
  exit();
});