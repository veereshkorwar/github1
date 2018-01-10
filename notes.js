// Import events module
/*var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');

   // Fire the data_received event
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");

*/
const fs =require('fs');
console.log('adding note');
const  yargs = require('yargs');

console.log('yargs',yargs.argv);

//adding a note to text file
var addNote=(title,body)=>
{
  console.log('adding a note',title,body);
  fs.appendFile('message.txt', title, (err) => {
  if (err) throw err;
  console.log(title,' was appended to file!');
});

}
var getNote = (title,body) =>{
  console.log('getting the note',title,body);
}
var removeNote = (title) =>{
  console.log('removing the note',title);
}

 var getAll =() =>{
   console.log('getting all notes');
 }



 /* multiplication table
 var table = ()=>{
   for (i=0;i<=10;i++) {
     for(j=0;j<=10;j++) {
      var result=i*j;
  console.log(i,'x',j,'=',result);
   }
  }
};
*/



module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote

} ;

//


//setting the yargs properties
