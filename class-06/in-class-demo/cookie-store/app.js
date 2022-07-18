'use strict';
// console.log('hi')

let hour = ['6 a.m.', '7 a.m.', '8 a.m.'];

let seattle = {
  // Seattle	23	65	6.3
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    console.log(cookiesSoldThisHour);
  }
}

seattle.calcCookiesPerHour();

// Lab 7 — put the data in tables
// Lab 8 — add some CSS
// Lab 9 — polish it up
