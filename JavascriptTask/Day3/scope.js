function sample(){
    //console.log(this) //this refers to the object
                     //with which the current function  is called
    console.log(this.Sample.store)                 
}

a=30
sample.store ={sno:1,name:"Sobana"}
sample() //window.sample in case of browser
         //global.sample