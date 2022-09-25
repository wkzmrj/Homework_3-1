//操作文件;
// file system; 

//root:当前所在文件的根路径
//base:模块文件名
//parse方法
const path = require('path')

console.log(path.parse(__filename))