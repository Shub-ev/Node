const fs = require('fs'); // import fs module

const fileData = fs.readFileSync('./text.txt', 'utf-8');

console.log(fileData);
