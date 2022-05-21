# Introduction
storage container logical partitions management.

## Example
```js
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
```

# Getting Started
TO DO: Things to do when getting started on this project.
- [Documentation](docs/README.md).

# Build and Test
TODO: Will apply your code and project building standards to templates.
* The tests will be applied as in the template projects.
* Development and operation will be planned as test/slot/production.

# Contribute
TODO : The best method of making a contribution will be to comply with the following items.
* Work with algorithms and flowcharts to solve problems.
* Make pull requests to version control systems.
* Stick to Architecture and Design Patterns apps.
* Take care to develop applications with Domain Based Design / Test-oriented development approaches.
* Stick to the architectural patterns used in abstraction software like Model-View-Controller.
- Be consistent in executing maintainable practices with Object Oriented Programming (abstraction, encapsulation, inheritance and polymorphism...) techniques.
* Use behavior-oriented development tools effectively.
* Make it a habit to use Integration testing / Unit Testing / Functional Testing / Automation Tests.
* Be persistent in applying metrics that describe how well the source code has been tested. [ have something to show at meetings: ) ]
* Send your code with traditional commit messages, make your code understandable with static code analysis tools, "code documentation" tools.
* Build event-driven, scalable service applications with serverless application development platforms.
* Follow the steps to improve threading techniques like in services or mobile apps. 

# While starting

In the project; principles and architectural examples of development, code submission, consistent coding styles and development in team environment have been implemented.

- Welcome to us, to contribute See [How to Provide Storey](CONTRIBUTING.md)
- Review the Participant Agreement [Code of Conduct](CODE_OF_CONDUCT.md).
