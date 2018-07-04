
const fs = require('fs');

fs.readFile('a.tex', function(err, dataA) {
  if(err) console.error(err);
  fs.readFile('b.txt', function(err, dataB) {
    if(err) console.error(err);
    fs.readFile('c.txt', function(err, dataC) {
      if(err) console.error(err);
      setTimeout(function() {
        fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
          if(err) console.error(err);
        });
      }, 30*1000);
    });
  });
});

/*
{ Error: ENOENT: no such file or directory, open 'a.tex' errno: -2, code: 'ENOENT', syscall: 'open', path: 'a.tex' }
{ Error: ENOENT: no such file or directory, open 'b.txt' errno: -2, code: 'ENOENT', syscall: 'open', path: 'b.txt' }
{ Error: ENOENT: no such file or directory, open 'c.txt' errno: -2, code: 'ENOENT', syscall: 'open', path: 'c.txt' }
*/