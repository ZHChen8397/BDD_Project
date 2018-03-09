var assert = require('assert')
var English = require('yadda').localisation.English
let userinfo = {}
let isLogin = false
const user = require('../../../src/back/login.js')
module.exports = English.library()

  .given('$User type email address $email and password $pwd', function (name, email, pwd) {
    userinfo['name'] = name
    userinfo['email'] = email
    userinfo['pwd'] = pwd

    console.log(JSON.stringify(userinfo, null, 2))
  })
  .when('$user click login button', function (man) {
    isLogin = user.login()
  })

  .then('$user should login sucessfully', function (user) {
    assert.equal(isLogin, true)
  })
