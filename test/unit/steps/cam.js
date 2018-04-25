var assert = require('assert')
var PythonShell = require('python-shell');
var English = require('yadda').localisation.English
let ans = 0
let p
let isEnter

module.exports = English.library()
  
  .given('I run my python code', function () {
    // return openCam()
    // .then((result)=>{
    //   console.log(result)
    // })
  })

  .when('I finish the camera', function () {
    
  })
  .then('I should return value gotcha', function (num) {
    assert(true)
  })

function openCam(){
  return new Promise((resolve,reject)=>{
    console.log('in funnnnn')
    var options = {
      scriptPath: './pyforJS'
      };
      var pyshell = new PythonShell('cam.py',options);

      pyshell.on('message', function (result) {
          console.log('innnnnnnn here')
          if(result) resolve(result)
          else reject(result)
      });
  })
}