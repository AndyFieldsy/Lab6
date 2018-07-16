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

for(var i = 0; i < hour.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hour[i] + firstandpike.customerPerHour[i];
  ulEl.appendChild(liEl);
  var hourSection = document.getElementById('hour');
  hourSection.appendChild(ulEl);
}

function getRandom(min,max) {
  return Math.random() * (max - min) + min;
}
console.log(Math.round(getRandom(firstandpike.min,firstandpike.max))); //tests code

var counter = 0;
while (counter < 15) {
  for(var j = 0; j < hour.length; j++); {
    firstandpike.customerPerHour.push(Math.round(getRandom(firstandpike.min,firstandpike.max)));
  }
  counter ++;
}


// for(var k = 0; k < hour.length; k++) {
//   firstandpike.CustomerPerHour[k];
// }

console.log(firstandpike.customerPerHour.reduce((a,b) => a + b, 0)); // Adds all numbers in array.

console.log(firstandpike.customerPerHour);

// var seatac = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   AvgCookieSale: 1.2,
// };

// var ul2El = document.createElement('ul');

// for(var i2 = 0; i2 < hour.length; i2++) {
//   var li2El = document.createElement('li');
//   li2El.textContent = hour[i2];
//   ul2El.appendChild(li2El);
// }
// var hour2Section = document.getElementById('hour');
// hour2Section.appendChild(ul2El);


