// config/testData.js
module.exports = {
  users: {
    standard: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    locked: {
      username: 'locked_out_user',
      password: 'secret_sauce'
    },
    invalid: {
      username: 'invalid_user',
      password: 'wrong_password'
    }
  },
  urls: {
    login: 'https://www.saucedemo.com/',
    inventory: 'https://www.saucedemo.com/inventory.html'
  }
};