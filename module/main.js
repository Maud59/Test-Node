const str = require('./str.js'); // on nomme la variable str car notre fichier s'appelle ainsi
const flag = require('./flag.js');

const server = require('./server.js')

//console.log(flag.getFlag('name'));

console.log(str.toUpper('hello'));

server();