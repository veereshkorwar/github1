//console.log(module);
//console.log(module.children);
//notes.addNote();
//var res = notes.addNote();
//console.log(res);
//let add = notes.add(10,20);
//console.log('Result:', notes.add(9, -2));
//console.log (`your age is ${notes.age} `);
//console.log('the function is '+"  "+ notes.addNote);
 /*console.log('Starting app.');
const notes = require('./notes');
 const fs = require('fs');
 const os = require('os');
 var user = os.userInfo();
 fs.appendFile('greetings.txt', `Hello ${user.username}!`);
*/
/*const _ = require('lodash');
console.log(_.isString('abc'));
console.log(_.isString(25));
 var filter =['abc','def','abc'];
console.log(_.uniq(filter));
console.log(_.uniq(filter));
console.log (module.parent);
module.id=20;
console.log (module.id);
*/
/*
const fs = require('fs');
const os = require('os');
var id = os.userInfo();
console.log(id);
module.id = id.uid;*/
module.children = [
  'nbg',
   'je3cx',
  '22e3'

];
console.log (module.children);

var os = require('os');
var myos = os.userInfo();
module.id = myos;
console.log(module.id.uid+"  "+module.id.username);
