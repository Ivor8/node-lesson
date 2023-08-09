const os = require('os'); //load os mosule

var tmemory = os.totalmem();
var freememory= os.freemem();

console.log('Total memory: ' + tmemory);
console.log('Free memory: ' + freememory);