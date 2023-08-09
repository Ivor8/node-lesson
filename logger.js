console.log(__filename);
console.log(__dirname);
 var ulr = 'http://mylogger.io/log';

 function log(message) {
    //send an HTTP request

    console.log(message)
 }


 // the variable and the function defined above are only scoped
 // this model and cannot be used outside of the model unless exported
// to make it public, that is visible from the outside, we then export it

module.exports.log = log;    // recall the console.log(module) is what contains that export variabele.

// now we are done exporting our logger module. so we need to load and use it in our app.js
