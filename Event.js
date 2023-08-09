// an event is simply a signal that indicates that something has happened in our application
// this is one of the core context or node js

const EventEmitter = require('events'); //notice that here the firt later of every word is in uppercase. thats because EvenEmiter is a class and not a function
 // a class is a container for a bunch of related methods and properties
 const emitter = new EventEmitter(); // this one here is a method

 //difference between class and object.

 // just like Human and John. a class describes the properties of an object. while the object is that thing itself
 // emmit here means making a signal that shows or says that something has happened

//Register a listerner

emitter.on('messageLogged', function(){
    console.log('listener called')
});
 //Raise an Event
 emitter.emit('messageLogged');
 // this is the end of the lesson.. will release the second and more detailed version in one week