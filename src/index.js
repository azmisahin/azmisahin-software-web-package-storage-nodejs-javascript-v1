'use strict'

/**
 * Event Emitter
 * Module dependencies
 * @private
 */
const EventEmitter = require('events')

/**
 * @file
 * storage managament.
 */

/**
 * storage container logical partitions management. `Storage`
 *
 * @example
 *
 *  // module instance
 *  storage = new Storage()
 *
 *  // mock
 *  let _parameters = {
 *    partitionId: '100000000000001',
 *    items: [{}],
 *  }
 *
 *  // parameters
 *  let expected
 *
 *  // operation
 *  let result = storage.addItem(_parameters.partitionId, _parameters.items[0])
 *
 *  // result
 *  let actual
 *
 *  // condination item
 *  let item
 *  item = result                                     // method result
 *  item = storage.getItems(_parameters.partitionId)  // call method result
 *  actual = item.length
 *  expected = _parameters.items.length
 *  assert.deepEqual(actual, expected)
 *
 *  // condination sequence
 *  actual = storage.sequence(_parameters.partitionId)
 *  expected = _parameters.items.length
 *  assert.equal(actual, expected)
 *
 * @class
 * Data Storage
 *
 */
class Storage extends EventEmitter {
  /**
   * @private
   * @method
   * Initalize Class
   */
  _init() {
    /**
     * Storage Sequence
     * @private
     */
    this._storageSequence = 0

    /**
     * Storage Data
     * @private
     */
    this._data = {}

    /**
     * Get sequence index
     *
     * `getSequence()` = `sequence`
     *
     * @example
     *
     *  // module instance
     *  storage = new Storage()
     *
     *  // mock
     *  let _parameters = {
     *    items: [],
     *  }
     *
     *  // parameters
     *  let expected = _parameters.items.length
     *
     *  // result
     *  let result = storage
     *
     *  // result
     *  let actual = result.sequence()
     *
     *  // condination sequence
     *  assert.equal(actual, expected)
     *
     * @type {number}
     * @method
     */
    this.sequence = this.getSequence
  }

  /**
   * Property name to use for the storage
   *
   * @constructor
   *
   * @returns {Storage} Storage instance.
   */
  constructor() {
    //
    super()

    // Initalize
    this._init()

    // return instance
    return this
  }

  /**
   * Event signal
   * @param {string} eventName signal channel
   * @param {object|Array} eventData signal data
   *
   * @example
   *
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    eventName: 'added',
   *    eventData: [],
   *  }
   *
   *  // recevied
   *  let expected = _parameters.eventData
   *
   *  // called
   *  let actual
   *
   *  // callback
   *  // param {object|Array} eventData signal data
   *  function callback(eventData) {
   *    // result
   *    actual = eventData
   *
   *    // condination event data
   *    assert.equal(actual, expected)
   *  }
   *
   *  // operation callback
   *  storage.event(_parameters.eventName, callback)
   *
   *  // operation
   *  storage.signal(_parameters.eventName, _parameters.eventData)
   */
  signal(eventName, eventData) {
    // internal event
    this.emit(eventName, eventData)
  }

  /**
   * Event Listener
   * @param {string} eventName listening event name
   * @param {function} callback the function that will run when the event is triggered.
   *
   * @example
   *
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    eventName: 'added',
   *    eventData: [],
   *  }
   *
   *  // recevied
   *  let expected = _parameters.eventData
   *
   *  // called
   *  let actual
   *
   *  // callback
   *  // param {object|Array} eventData signal data
   *  function callback(eventData) {
   *    // result
   *    actual = eventData
   *
   *    // condination event data
   *    assert.equal(actual, expected)
   *  }
   *
   *  // operation callback
   *  storage.event(_parameters.eventName, callback)
   *
   *  // operation
   *  storage.signal(_parameters.eventName, _parameters.eventData)
   */
  event(eventName, callback) {
    // internal event callback
    this.on(eventName, callback)
  }

  /**
   * Dataset
   * @param {Array} data dataset
   */
  setData(data) {
    this._data = data
  }

  /**
   * Get dataset
   * @returns {array} dataset
   */
  getData() {
    return this._data
  }

  /**
   * Get sequence index
   *
   * `getSequence()` = `sequence`
   *
   * @example
   *
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    items: []
   *  }
   *
   *  // parameters
   *  let expected = _parameters.items.length
   *
   *  // result
   *  let result = storage
   *
   *  // result
   *  let actual = result.getSequence()
   *
   *  // condination sequence
   *  assert.equal(actual, expected)
   */
  getSequence() {
    // return storage sequence
    return this._storageSequence
  }

  /**
   * Get storage items
   *
   * @example
   *
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    partitionId: '123456789123456',
   *    items: undefined,
   *  }
   *
   *  // parameters
   *  let expected = _parameters.items
   *
   *  // operation
   *  let result = storage.getItems(_parameters.partitionId)
   *
   *  // result
   *  let actual = result
   *
   *  // condination item
   *  assert.deepEqual(actual, expected)
   *
   * @param {string} partitionId item partition id
   *
   * @returns {Array} data items
   */
  getItems(partitionId) {
    // default item
    let result = this._data[partitionId]

    // return
    return result
  }

  /**
   * Storage add item
   *
   * @example
   *
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    partitionId: '123456789123456',
   *    items: {},
   *  }
   *
   *  // parameters
   *  let expected = 1
   *
   *  // operation
   *  let result = storage.addItem(_parameters.partitionId, _parameters.item)
   *
   *  // return is numeric value
   *  let actual = result
   *
   *  // condination item
   *  assert.equal(actual, expected)
   *
   * @param {string} partitionId partitionId item partition id
   * @param {JSON} item json data item
   *
   * @returns {number} return is numeric value
   */
  addItem(partitionId, item) {
    // increase the order
    this._storageSequence++

    // check and initalize array
    if (!this._data[partitionId]) this._data[partitionId] = []

    // proccess
    let result = this._data[partitionId].push(item)

    // event
    this.signal('added', item)

    // result
    return result
  }

  /**
   * Read a item
   * When an object is read it will be deleted.
   * @example
   *  // module instance
   *  storage = new Storage()
   *
   *  // mock
   *  let _parameters = {
   *    partitionId: '100000000000001',
   *    items: [{}],
   *  }
   *
   *  // parameters
   *  let expected = _parameters.items[0]
   *
   *  // operation
   *  storage.addItem(_parameters.partitionId, _parameters.items[0])
   *  let result = storage.readItem(_parameters.partitionId, 0)
   *
   *  // result
   *  let actual = result
   *
   *  // condination item
   *  assert.equal(actual, expected)
   *
   * @param {string} partitionId partitionId item partition id
   * @param {number} index partition items data index
   * @returns {JSON} data item
   */
  readItem(partitionId, index) {
    // get array item
    let items = this.getItems(partitionId)

    // proccess
    let result = items == undefined ? undefined : items[index]

    // event
    this.signal('readItem', result)

    // remove the first record in the partion data
    if (items != undefined) this.removeItem(partitionId)

    // result
    return result
  }

  /**
   * Get Item
   * @param {string} partitionId partitionId item partition id
   * @param {number} index partition items data index
   * @returns {JSON} data item
   */
  getItem(partitionId, index) {
    // get array item
    let items = this.getItems(partitionId)

    // proccess
    let result = items == undefined ? undefined : items[index]

    // result
    return result
  }

  /**
   * Removes the first record in the partion data
   *
   * @param {string} partitionId  partitonId
   *
   * @returns {any} Any type*, representing the removed array item. *An array item can be a string, a number, an array, a boolean, or any other object types that are allowed in an array.
   */
  removeItem(partitionId) {
    // remove first item
    let result = this._data[partitionId].shift()

    // event
    this.signal('removeItem', result)

    // if length == 0 clear
    result = this._data[partitionId].length == 0 ? this.clearItem(partitionId) : false

    // result
    return result
  }

  /**
   * Clear item
   * @param {string} partitionId partitionId
   * @returns number
   */
  clearItem(partitionId) {
    // select object
    let data = this._data[partitionId]

    // check Array
    let isArray = data instanceof Array

    // clear
    let result = isArray == true ? delete this._data[partitionId] : data.length

    // result
    return result
  }

  /**
   * Get Total Partion
   * @returns {number} returns te partition totals of the data in the message
   */
  getPartitionTotal() {
    // data keys
    let dataKeys = Object.keys(this._data)

    // length
    let result = dataKeys.length

    // result
    return result
  }

  /**
   * Get Total Partion items
   * @returns {number} returns te partition total items of the data in the message
   */
  getPartitionsItemsTotal() {
    // data values
    let dataValues = Object.values(this._data)

    // length
    let result = 0

    // count partion
    dataValues.forEach((elements) => {
      // count item
      elements.forEach(() => {
        // operation
        result++
      })
    })

    // result
    return result
  }

  /**
   * Get Total Partion items By partition Id
   * @param {string} partitionId
   * @returns {number} returns te partition total items of the data in the message
   */
  getPartitionItemsTotal(partitionId) {
    // data values
    let dataValues =
      this._data[partitionId] == undefined ? [] : Object.values(this._data[partitionId])

    // length
    let result = 0

    // count items
    dataValues.forEach(() => {
      // operation
      result++
    })

    // result
    return result
  }

  /**
   * Get partitions
   * @returns {array}
   */
  getPartitions() {
    // all keys
    let keys = Object.keys(this._data)

    // retuslt
    return keys
  }

  /**
   * Get partitions count
   * @returns {array}
   */
  getPartitionsCount() {
    // all keys
    // data values
    let data = this._data

    // result
    let result = []

    // reduce
    Object.keys(data).map(function (key, index) {
      let item = { o: index, id: key, count: data[key].length }

      result.push(item)
    })

    // retuslt
    return result
  }
}

/**
 * Storage
 * @module storage
 */
module.exports = Storage
