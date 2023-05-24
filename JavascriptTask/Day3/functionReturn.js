function a(){}  //Undefined function

function b() {return "Hello"}

c = function() {return "Hi"}    //nameless function(anonymous function)

console.log(a())
console.log(b())
console.log(c())

b.store ={x:111,y:222,z:333} // Function can store additional function

console.log(typeof(a))
console.log(b.store)
console.log(b)
console.log(a)


// note: functions return undefined if it doesnot encounter
//return statement
