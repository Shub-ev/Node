// js is synchronous, blocking, single threaded language
// so it has to be dependant on external dependencies for async operations

// *****  libuv  ***** is one of those dependencies (written in C)

// example 
const fs = require('fs');
console.log(`First`);
fs.readFile('another.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(`Error `+error);
    }
    else{
        console.log(data);
    }
})
console.log(`Last`);

// above code block in async and fs dosent block other statements