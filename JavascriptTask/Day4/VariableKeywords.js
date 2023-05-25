//global, function scope and local scope

a=20

function printer(){
   // a=35
    console.log("a:",a)
    a=50
}

printer()
console.log("globale a:",a)


//local variable we can access within the function
//Global variable we access outside the  function
