'use strict';



function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}


var pike = {
  name: 'First and Pike',
  minCustomer: 23,
  maxCustomer:54,
  avgSale: 3.4,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function() {
  // for (var i = 0; i < hours.length; i++)
    for(var hour of pike.hours) {
      var rando = generateRandom(pike.minCustomer, pike.maxCustomer);
      pike.customersPerHour.push(rando);
      for (var numCustomers of pike.customersPerHour) {
        var cookies = Math.ceil(pike.avgSales + numCustomers);
        pike.cookiesPerHour.push(cookies);
        pike.dailyTotal += cookies;
    }
    return pike.customersPerHour;
  }

  calculateSales: function() {
    pike.calculateCustomers();

    }
  },

  render: function() {
    pike.calculateSales();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2')
    h2El.textConent = pike.name;
    ulEl.appendChild(h2El);

for (var hour in pike.hours) {
  var liEl = document.createElement('li')
  liEl.textContent = pike.hours(idx) + ':' + pike.cookiesPerHour[idx] + ' cookies';
}


    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);

  },
};

var stores = [pike, ];
for (store of stores) {
  store.render();
}