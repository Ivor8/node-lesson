const fs = require('fs');

//almost every operation defined here comes in two forms. 
//synchronous or blocking and asynchronous or non-blocking
// use asynchronous in real-world applications because they are none blocking


//example of fs methods

//synchronouse form
//to desplay all the files in the current folder
const files = fs.readdirSync('./');   
console.log(files);

//assynchronous method..
// this fuction is used for a call back. that means the function is called after a certain proccess is completed
//just like desplaying an error after program is executed
// the function returns two values the err and the file
fs.readdir('$', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

// what this code will do is that it will return 
// Error if the readdir function shows an error
// adn it will return 'result' if there readdir function does not show an errow


//NOTE
// readdir() method is used to asynchronously read the contents of a given directory. The callback of this method returns an array of all the file names in the directory. The options argument can be used to change the format in which the files are returned from the method.
// readdirSync() method is used to synchronously read the contents of a given directory. The method returns an array with all the file names or objects in the directory. The options argument can be used to change the format in which the files are returned from the method.