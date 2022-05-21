const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const Storage = require('../../src')

When('the application is launched', function () {
  this.displayName = Storage.name
})

Then('i should see the text {string}', function (expectedResponse) {
  assert.equal(this.displayName, expectedResponse)
})
