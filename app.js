const logger = require('./logger');

console.log(logger); // this will load the loadder module to the app module

// now we can call the log function pressent in the logger module
logger.log('message');