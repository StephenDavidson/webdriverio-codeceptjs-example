'use strict';

let I;

module.exports = {

  _init() {
    I = require('../custom_steps.js')();
  },

  // setting locators
  searchField: 'q',
  searchResults: '#search',
  submitBtn: 'button[type="submit"]',

  // introducing methods
  searchFor(value) {
    I.fillField(this.searchField, value);
    I.click(this.submitBtn);
    I.waitForElement(this.searchResults, 30);
  }
};
