// // blank template for starting projects

// // Lab 7 and in class notes

// 'use strict';


// var allDogs = [];

// function Dog(name, color, breed, nickName) {
//   this.name = name;
//   this.color = color;
//   this.breed = breed;
//   this.nick = nickName;

//   // avoid defining instance methods inside the constructor
//   // this.bark = function() {
//   //   console.log(this.name);
//   // };

//   allDogs.push(this);
// }

// Dog.prototype.bark = function() {
//   console.log(this.name);
// };


// //  1. {} creates new object literal
// //  2. assigns context to 'this'

// // {
// //   name: 'Demi',
// //   color: 'black and white',
// //   breed: 'border collie',
// //   nick: 'Demdog',
// // }


// new Dog('Demi', 'black and white', 'border collie', 'Demdog');
// new Dog('Dog', 'black', 'not sure', 'D');
// new Dog('Dog Too', 'blue', 'cat', 'Dog?');
// new Dog ('Salt', 'white', 'lizard', 'Salt');
// new Dog('Whiskers', 'orange', 'definitely a cat', 'Mr. Bigglesworth');


// Create the document
function Store(name, minCustomer, maxCustomer, avgSales, hours, customersPerHour, cookiesPerHour, dailyTotal) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.hours = hours;
  this.customersPerHour = customersPerHour;
  this.cookersPerHour = cookiesPerHour;
  this.dailyTotal = dailyTotal;
}

 new Store('First and Pike', )

// 2. Multipy rando by avgSales

function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var pike = {
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function() {
    // 1. Iterate thru hours
    // 2. For each hour, run rando generator
    // 3. Push to customersPerHour

    // for (var i = 0; i < pike.hours.length; i++) {}
    for(var hour of pike.hours) {
      var rando = generateRandom(pike.minCustomers, pike.maxCustomers);
      pike.customersPerHour.push(rando);
    }
    return pike.customersPerHour; // Unnecessary - for demo only
  },
  calculateSales: function() {
    pike.calculateCustomers();

    for (var numCustomers of pike.customersPerHour) {
      var cookies = Math.ceil(pike.avgSales * numCustomers);
      pike.cookiesPerHour.push(cookies);
      pike.dailyTotal += cookies;
    }
    return pike.cookiesPerHour; // Unnecessary - for demo only
  },
  render: function() {
    pike.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = pike.name;
    ulEl.appendChild(h2El);

    for (var idx in pike.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = pike.hours[idx] + ': ' + pike.cookiesPerHour[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + pike.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};



// Finally; Run render() for each store we create!
var stores = [pike, seatac, seacen, caphill, alki];
for (var store of stores) {
  store.render();
}
