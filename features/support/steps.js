import {Given, When, Then} from '@cucumber/cucumber'
//const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given('a variable set to {int}', function (number){
    this.setTo(number)
})

When('I increment the variable by {int}', function (number){
    this.incrementBy(number);
})

Then('the variable souble be {int}', function (number){
    assert.equal(this.variable, number)
})