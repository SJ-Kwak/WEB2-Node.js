var fs = require('fs');

/*
//readFileSync 동기적
console.log('A');
var result=fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

//A B C 출력
*/

//비동기적. nodejs에서는 비동기적 방식으로 실행해야 함.
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
//A C B 출력