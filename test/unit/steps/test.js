var assert = require('assert')
var English = require('yadda').localisation.English
let ans = 0
module.exports = English.library()
  .given('I have $num', function (num) {
    ans += num*1
  })
  .when(['I add $num1','I add another $num1'], function (num1) {
    ans += num1*1
  })

  .then('I got $num', function (num) {
    assert.equal(ans, num)
  })
