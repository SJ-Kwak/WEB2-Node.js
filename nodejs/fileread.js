var fs = require('fs'); //fs라는 변수를 통해 filesystem 받을 수 있음
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
})
