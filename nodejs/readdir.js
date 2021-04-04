var testFolder = './data';//data 폴더 내의 파일 긁어오기
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
