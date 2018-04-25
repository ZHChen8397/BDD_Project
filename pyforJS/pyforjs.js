var PythonShell = require('python-shell');

// var options = {
//     scriptPath: './pyforJS'
// };
// var pyshell = new PythonShell('cam.py',options);
    
    
// pyshell.on('message', function (message) {
//     let result = message
//     console.log(result);
// });
opencam()
.then(result=>{
    console.log(result)
})
console.log('next')
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
    