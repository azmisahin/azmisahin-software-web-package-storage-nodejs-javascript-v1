/**
 * Example application
 */
const assert = require('assert')

// package define 
const Storage = require('../src')

// module instance
var storage = new Storage()

// mock
let _parameters = {
  partitionId: '123456789123456',
  item: {},
}

// parameters
let expected = _parameters.item

// operation
storage.addItem(_parameters.partitionId, _parameters.item)

// read item
let result = storage.readItem(_parameters.partitionId, 0)

// result
let actual = result

// condination item
assert.deepEqual(actual, expected)
