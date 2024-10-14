class User {
  name
  constructor (name) {
    this.name = name
  }

  read (text) {
    return (this.name + ' is reading ' + text)
  }
}

module.exports = User
