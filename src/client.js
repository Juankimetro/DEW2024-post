const User = require('./user')

class Client extends User {
  billing = 0
  /* constructor (name, billing) {
    super(name)
    this.billing = billing
  } */
}

module.exports = Client
