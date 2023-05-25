//global, function scope and local scope

a=20

function printer(){
    var a=35  //function scope
    console.log("a:",a)
    a=50
}

printer()
console.log("globale a:",a)

//var can be used inside the function only
