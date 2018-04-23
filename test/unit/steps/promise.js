var assert = require('assert')
var English = require('yadda').localisation.English
let ans = 0
module.exports = English.library()
  .given('I have $num', function (num) {
    let p = new Promise(function(resolve,reject){
        console.log(`ans should = ${ans}`)      
        if(true){
            ans += num*1
            resolve(ans)
        }
        else{
            reject('err')
        }
    })

  })
  .when('I add $num1', function (num1) {
    ans += num1*1
  })

  .then('I should return $num', function (num) {
    assert.equal(ans, num)
  })
