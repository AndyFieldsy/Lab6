// blank template for starting projects

// Lab 6

'use strict';




var hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:', 'Total:'];




var firstandpike = {
  min: 23,
  max: 65,
  AvgCookieSale: 6.3,
  customerPerHour: [],
};
var ulEl = document.createElement('ul');

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





var firstandpike = {
  min: 3,
  max: 24,
  AvgCookieSale: 1.2,
  customerPerHour: [],
};
var ulEl = document.createElement('ul');

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





var firstandpike = {
  min: 11,
  max: 38,
  AvgCookieSale: 3.7,
  customerPerHour: [],
};
var ulEl = document.createElement('ul');

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




var firstandpike = {
  min: 20,
  max: 38,
  AvgCookieSale: 2.3,
  customerPerHour: [],
};
var ulEl = document.createElement('ul');

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




var firstandpike = {
  min: 2,
  max: 16,
  AvgCookieSale: 4.6,
  customerPerHour: [],
};
var ulEl = document.createElement('ul');

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