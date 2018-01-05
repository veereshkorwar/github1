
 const EventEmitter = require('events');
  const fs = require('fs');
 class MyEmitter extends EventEmitter {}

 /*const myEmitter = new MyEmitter();
 myEmitter.on('event',(a,b) => {
   console.log('an event occurred!');
 });
 myEmitter.emit('event','a','b');


 const myEmitter1 = new MyEmitter();
 myEmitter1.on('event', (a, b) => {
setImmediate(() => {
     console.log('this happens asynchronously');

   });
 });
 myEmitter1.emit('event', 'a', 'b' );

  const myEmitter2 = new MyEmitter();
  let m=0;
  myEmitter2.on('event',()=>{
    for(var i=0;i<=10;i++){
    console.log(++m);
    }

  });
  myEmitter2.emit('event');

  myEmitter2.emit('event');
  */
  const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
myEmitter.on('event',()=>{});
myEmitter.on('event',()=>{});
myEmitter.on('event',()=>{});
myEmitter.on('event',()=>{});
myEmitter.on('event',()=>{});
console.log(EventEmitter.listenerCount(myEmitter, 'event'));;
// Prints:
//   B
//   A
