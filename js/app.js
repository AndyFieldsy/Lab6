// blank template for starting projects

// Lab 6

'use strict';




var hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:', 'Total:'];




var firstandpike = {
  min: 23,
  max: 65,
  avgSale: 6.3,
  customerPerHour: [],
  cookiePerHour: [],

  
};
var ulEl = document.createElement('ul');
var liEl = document.createElement('li');
liEl.textContent = '1st and Pike location';
ulEl.appendChild(liEl);
for(var i = 0; i < hour.length-1; i++) {
  firstandpike.customerPerHour.push(Math.round(getRandom(firstandpike.min,firstandpike.max)));
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + firstandpike.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}
var liElA  = document.createElement('li');
ulEl.appendChild(liElA);
liElA.textContent = hour[15] + firstandpike.customerPerHour.reduce((a,b) => a + b, 0);

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(firstandpike.min,firstandpike.max))); //tests code

console.log(firstandpike.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.





var seatac = {
  min: 3,
  max: 24,
  avgSale: 1.2,
  customerPerHour: [],
  cookiePerHour: [],

  
};
var ulEl = document.createElement('ul');
var liEl = document.createElement('li');
liEl.textContent = 'Seatac Airport location';
ulEl.appendChild(liEl);
for(var i = 0; i < hour.length-1; i++) {
  seatac.customerPerHour.push(Math.round(getRandom(seatac.min,seatac.max)));
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + seatac.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}
var liElA  = document.createElement('li');
ulEl.appendChild(liElA);
liElA.textContent = hour[15] + seatac.customerPerHour.reduce((a,b) => a + b, 0);

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(seatac.min,seatac.max))); //tests code

console.log(seatac.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.





var seacenter = {
  min: 11,
  max: 38,
  avgSale: 3.7,
  customerPerHour: [],
  cookiePerHour: [],

};
var ulEl = document.createElement('ul');
var liEl = document.createElement('li');
liEl.textContent = 'Seattle Center location';
ulEl.appendChild(liEl);
for(var i = 0; i < hour.length-1; i++) {
  seacenter.customerPerHour.push(Math.round(getRandom(seacenter.min,seacenter.max)));
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + seacenter.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}
var liElA  = document.createElement('li');
ulEl.appendChild(liElA);
liElA.textContent = hour[15] + seacenter.customerPerHour.reduce((a,b) => a + b, 0);

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(seacenter.min,seacenter.max))); //tests code

console.log(seacenter.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.




var caphill = {
  min: 20,
  max: 38,
  avgSale: 2.3,
  customerPerHour: [],
  cookiePerHour: [],

};
var ulEl = document.createElement('ul');
var liEl = document.createElement('li');
liEl.textContent = 'Capitol Hill location';
ulEl.appendChild(liEl);
for(var i = 0; i < hour.length-1; i++) {
  caphill.customerPerHour.push(Math.round(getRandom(caphill.min,caphill.max)));
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + caphill.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}
var liElA  = document.createElement('li');
ulEl.appendChild(liElA);
liElA.textContent = hour[15] + caphill.customerPerHour.reduce((a,b) => a + b, 0);

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(caphill.min,caphill.max))); //tests code

console.log(caphill.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.




var alki = {
  min: 2,
  max: 16,
  avgSale: 4.6,
  customerPerHour: [],
  cookiePerHour: [],

};
var ulEl = document.createElement('ul');
var liEl = document.createElement('li');
liEl.textContent = 'Alki location';
ulEl.appendChild(liEl);
for(var i = 0; i < hour.length-1; i++) {
  alki.customerPerHour.push(Math.round(getRandom(alki.min,alki.max)));
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + alki.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}
var liElA  = document.createElement('li');
ulEl.appendChild(liElA);
liElA.textContent = hour[15] + alki.customerPerHour.reduce((a,b) => a + b, 0);

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(alki.min,alki.max))); //tests code

console.log(alki.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.