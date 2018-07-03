
const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';

fs.readFile(fname, function(err, data) {
  if(err) return console.error(`error reading file ${fname}: ${err.message}`);
  console.log(`${fname} constents: ${data}`);
});

// error reading file may_or_may_not_exist.txt: ENOENT: no such file or directory, open 'may_or_may_not_exist.txt'