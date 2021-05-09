//array, object

var f= function(){//함수는 statement이면서 값이다.
    console.log(1+1);
    console.log(1+2);
}
var a=[f];
a[0]();

var o={
    func:f
}
o.func();
//var i = if(true){console.log(1)}; 값이 될 수 x

//var w = while(true){console.log(1)}; 값이 될 수 x