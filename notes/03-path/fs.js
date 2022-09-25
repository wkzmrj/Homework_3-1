// 同步与异步
const fs = require('fs')

//tongbu 
const result = fs.readdirSync('./')

// console.log(result)
//异步
fs.readdir('./', function(error, files){
    console.log(files)
})