const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const message = getNotes();
console.log(message);

console.log(validator.isURL('https/mead.io'));
console.log(chalk.blue.inverse.bold('Error!'));