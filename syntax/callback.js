/*
function a(){
    console.log('A');
}
*/
var a=function(){
    console.log('A');
}
//a();//함수호출기호

function slowfunc(callback){
    callback();
}

slowfunc(a);