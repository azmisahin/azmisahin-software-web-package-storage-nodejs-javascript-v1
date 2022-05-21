// assert library
const assert = require('assert').strict

// Target condination.
const target = 'storage'
const Storage = require('../../src')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let storage

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = Storage

    // parameters
    let expected = _parameters

    // operation
    let result = storage

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })

  /**
   * Should `full usage` of Module.
   */
  it(`${target}-install`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '100000000000001',
      items: [{}],
    }

    // parameters
    let expected

    // operation
    let result = storage.addItem(_parameters.partitionId, _parameters.items[0])

    // result
    let actual

    // condination item
    let item

    item = result // method result
    item = storage.getItems(_parameters.partitionId) // call method result
    actual = item.length
    expected = _parameters.items.length
    assert.deepEqual(actual, expected)

    // condination sequence
    actual = storage.sequence(_parameters.partitionId)
    expected = _parameters.items.length
    assert.equal(actual, expected)
  })

  /**
   * Should `sequence()` of Module.
   */
  it(`${target}.sequence()`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      items: [],
    }

    // parameters
    let expected = _parameters.items.length

    // result
    let result = storage

    // result
    let actual = result.sequence()

    // condination sequence
    assert.equal(actual, expected)
  })

  /**
   * Should `getSequence()` of Module.
   */
  it(`${target}.getSequence()`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      items: [],
    }

    // parameters
    let expected = _parameters.items.length

    // result
    let result = storage

    // result
    let actual = result.getSequence()

    // condination sequence
    assert.equal(actual, expected)
  })

  /**
   * Should `getItems(partitionId)`
   * It should return undefined when there is no object in the array of Module.
   */
  it(`${target}.getItems(partitionId)`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
      items: undefined,
    }

    // parameters
    let expected = _parameters.items

    // operation
    let result = storage.getItems(_parameters.partitionId)

    // result
    let actual = result

    // condination item
    assert.deepEqual(actual, expected)
  })

  /**
   * Should `addItem(partitionId, item)` of Module.
   * The array must have a length of one when an element is added
   */
  it(`${target}.addItem(partitionId, item)`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
      item: {},
    }

    // parameters
    let expected = 1

    // operation
    let result = storage.addItem(_parameters.partitionId, _parameters.item)

    // return is numeric value
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `readItem(partitionId, index)` of Module.
   * when readind an empty object, it should return undefined.
   */
  it(`${target}.readItem(partitionId, index)-undefined`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
      item: undefined,
    }

    // parameters
    let expected = _parameters.item

    // operation
    let result = storage.readItem(_parameters.partitionId, 0)

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `readItem(partitionId, index)` of Module.
   * return a item
   * When an object is read it will be deleted.
   */
  it(`${target}.readItem(partitionId, index)`, function () {
    // module instance
    storage = new Storage()

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
  })

  /**
   * Should `removeItem(partitionId, index)` of Module.
   * return a item
   */
  it(`${target}.removeItem(partitionId, index)`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
      item: {},
    }

    // parameters
    let expected = true

    // operation
    storage.addItem(_parameters.partitionId, _parameters.item)

    // remove the first record in the partition data
    let result = storage.removeItem(_parameters.partitionId)

    // result
    let actual = result

    // condination item
    assert.deepEqual(actual, expected)
  })

  /**
   * Should `clearItem(partitionId)` of Module.
   */
  it(`${target}.clearItem(partitionId)`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
      item: {},
    }

    // parameters
    let expected = true

    // operation
    storage.addItem(_parameters.partitionId, _parameters.item)

    // clear the partition data
    let result = storage.clearItem(_parameters.partitionId)

    // result
    let actual = result

    // condination item
    assert.deepEqual(actual, expected)
  })

  /**
   * Should `getPartitionTotal()`  of Module.
   * sholud return 0
   */
  it(`${target}.getPartitionTotal()-0`, function () {
    // module instance
    storage = new Storage()

    // parameters
    let expected = 0

    // get partition total
    let result = storage.getPartitionTotal()

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `getPartitionTotal()` of Module.
   */
  it(`${target}.getPartitionTotal()`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = [
      {
        partitionId: '123456789123456',
        items: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        partitionId: '123456789123457',
        items: [
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
      },
      {
        partitionId: '123456789123458',
        items: [
          {
            id: 5,
          },
          {
            id: 6,
          },
        ],
      },
    ]

    // parameters
    let expected = _parameters.length

    _parameters.forEach((partition) => {
      let items = partition.items

      items.forEach((item) => {
        // operation
        storage.addItem(partition.partitionId, item)
      })
    })

    // get partition total
    let result = storage.getPartitionTotal()

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `getPartitionsItemsTotal()` of Module
   * sholud return 0
   */
  it(`${target}.getPartitionsItemsTotal() 0`, function () {
    // module instance
    storage = new Storage()

    // parameters
    let expected = 0

    // get partition items total
    let result = storage.getPartitionsItemsTotal()

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `getPartitionsItemsTotal()` of Module.   *
   */
  it(`${target}.getPartitionsItemsTotal()-0`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = [
      {
        partitionId: '123456789123456',
        items: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        partitionId: '123456789123457',
        items: [
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
      },
      {
        partitionId: '123456789123458',
        items: [
          {
            id: 5,
          },
          {
            id: 6,
          },
        ],
      },
    ]

    // parameters
    let expected = 6

    _parameters.forEach((partition) => {
      let items = partition.items

      items.forEach((item) => {
        // operation
        storage.addItem(partition.partitionId, item)
      })
    })

    // get partition items total
    let result = storage.getPartitionsItemsTotal()

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `getPartitionItemsTotal(partitionId)` of Module.
   * shoud return 0 By partition
   * */
  it(`${target}.getPartitionItemsTotal(partitionId)-by-id-0`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = {
      partitionId: '123456789123456',
    }

    // parameters
    let expected = 0

    // get partition
    let result = storage.getPartitionItemsTotal(_parameters.partitionId)

    // result
    let actual = result

    // condination item
    assert.equal(actual, expected)
  })

  /**
   * Should `getPartitionItemsTotal(partitionId)` of Module.
   * should By partition
   */
  it(`${target}.getPartitionItemsTotal(partitionId)-id`, function () {
    // module instance
    storage = new Storage()

    // mock
    let _parameters = [
      {
        partitionId: '123456789123456',
        items: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        partitionId: '123456789123457',
        items: [
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
      },
      {
        partitionId: '123456789123458',
        items: [
          {
            id: 5,
          },
          {
            id: 6,
          },
        ],
      },
    ]

    // parameters
    let expected

    // mock data
    _parameters.forEach((partition) => {
      let items = partition.items

      items.forEach((item) => {
        // operation
        storage.addItem(partition.partitionId, item)
      })
    })

    // test data
    _parameters.forEach((partition) => {
      // get partition
      let result = storage.getPartitionItemsTotal(partition.partitionId)

      // result
      let actual = result

      expected = partition.items.length

      // condination item
      assert.equal(actual, expected)
    })
  })
})
