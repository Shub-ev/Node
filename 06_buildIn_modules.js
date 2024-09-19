// there are no of build in modules available in node
// ex. os, path, fs


// OS import
// import os build in module using require
const os = require("os");
const path = require("path");
// prints hostname of system
console.log(os.hostname());
// prints current user info
console.log(os.userInfo());
// prints system uptime
console.log(os.uptime());
// OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

// PATH import
console.log("Seperator: " + path.sep);
