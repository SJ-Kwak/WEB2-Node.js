console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
//math라는 디렉토리 내에 존재하는 round 함수: 반올림
//Math.round() 함수는 내장함수. 출력 위해서는 console.log 있어야 함.
//다양한 용도로 출력 가능.

function sum(first, second){ //first, second: 매개변수 parameter variable
  console.log('a');
  return first+second;
  console.log('b');
}

console.log(sum(2,4)); //입력값 하나하나: 인자 argument
//이제 sum이라는 함수를 콘솔에, 이메일로, 파일로도 출력 가능
