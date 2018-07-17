// blank template for starting projects

// Lab 7 and in class notes

'use strict';


var allDogs = [];

function Dog(name, color, breed, nickName) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nick = nickName;

  // avoid defining instance methods inside the constructor
  // this.bark = function() {
  //   console.log(this.name);
  // };

  allDogs.push(this);
}

Dog.prototype.bark = function() {
  console.log(this.name);
};


//  1. {} creates new object literal
//  2. assigns context to 'this'

// {
//   name: 'Demi',
//   color: 'black and white',
//   breed: 'border collie',
//   nick: 'Demdog',
// }


new Dog('Demi', 'black and white', 'border collie', 'Demdog');
new Dog('Dog', 'black', 'not sure', 'D');
new Dog('Dog Too', 'blue', 'cat', 'Dog?');
new Dog ('Salt', 'white', 'lizard', 'Salt');
new Dog('Whiskers', 'orange', 'definitely a cat', 'Mr. Bigglesworth');


// Create the document



