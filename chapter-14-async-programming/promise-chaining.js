
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--) {
        timeoutIds.push(
          setTimeout(function() {
            if(countdown.superstitious && i===13) {
              // clear all pending timeouts
              timeoutIds.forEach(clearTimeout);
              return reject(new Error("DEFINITELY NOT COUNTING THAT"));
            }  
            countdown.emit('tick', i);
            if(i===0) resolve();  
          }, (countdown.seconds-1)*1000)
        );
      }
    });
  }
}

function launch() {
  return new Promise(function(resolve, reject) {
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2*1000);
  });
}

// const c = new Countdown(5)
//   .on('tick', i => console.log(i + '...'));

// c.go()
//   .then(launch)
//   .then(function(msg) {
//     console.log(msg);
//   })
//   .catch(function(err) {
//     console.error("Houston, we have a problem...");
//   });

/*
5...
4...
3...
2...
1...
0...
Lift off!
In orbit!
*/

const c = new Countdown(15, true)
  .on('tick', i => console.log(i + '...'));

c.go()
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Houston, we have a problem...");
  });

/*
15...
14...
Houston, we have a problem...
*/