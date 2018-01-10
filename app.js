const notes =require('./notes');

const  yargs = require('yargs');


var argv = yargs.argv;






 var command =argv._[0];
if(command === 'add'){
notes.addNote(argv.title,argv.body);
}
if(command==='list'){
  notes.getAll();
}
if(command==='read'){
  notes.getNote(argv.title,argv.body);
}

if(command==='remove'){
  notes.removeNote(argv.title,argv.body);
}




/* to display mul
else if(command==='table'){
  notes.table();
}
else if(command==='matrix'){
  notes.matrix();
}*/
