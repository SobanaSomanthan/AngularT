function outer(){

    //let a=30    //3 senerious also we have to try
    //var a=30
     a=30
 
     function inner(){
         console.log("outer a value in inner",a)
         a++
     }
     return inner
 }
 
  fun = outer();
  fun2 = outer()
  fun();  //30
  fun();  //31
  fun(); //32
  fun2(); //33
  fun()
  fun2()



  