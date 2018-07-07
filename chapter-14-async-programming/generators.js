
const fs = require('fs');

function nfcall(f, ...args) {
  return new Promise(function(resolve, reject) {
    f.call(null, ...args, function(err, ...args) {
      if(err) return reject(err);
      resolve(args.length<2 ? args[0] : args);
    });
  });
}

function ptimeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}

function grun(g) {
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if(!x.done) {
      if(x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate, 0, x.value);
      }
    }
  })();
}

// 

function* theFutureIsNow() {
  const data = yield Promise.all([
    nfcall(fs.readFile, 'a.txt'),
    nfcall(fs.readFile, 'b.txt'),
    nfcall(fs.readFile, 'c.txt'),
  ]);
  yield ptimeout(30*1000);
  yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
}

grun(theFutureIsNow);

/*
(node:33490) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file ordirectory, open 'a.txt'
(node:33490) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:33490) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
*/