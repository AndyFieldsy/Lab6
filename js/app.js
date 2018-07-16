// blank template for starting projects

// Lab 6

'use strict';




var hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:', 'Total:'];


var ulEl = document.createElement('ul');

for(var i = 0; i < hour.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hour[i];
  ulEl.appendChild(liEl);
}
var hourSection = document.getElementById('hour');
hourSection.appendChild(ulEl);

