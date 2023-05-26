function libfun(fun) {
    var dataitems = [ "Python Program", "Java Program", "C# Program"]
    fun(dataitems[Math.round(Math.random()*2)])

}



class DataHolder {
    constructor (data) {
        this.data =data
    }
    show() {  //if we use class then function keyword is not mandatory to the function
        console.log("Data -->", this.data)
    }

    changeData() {
        /*
        libfun(function(value){
            this.data = value  //this is undefined in the contest of this function
        }.bind(this)) //If we bind it then it will be available in callback instead of undefined
        */

        libfun((value) => {
            this.data = value       //if we use arrow function no need to bind the value
        })
    }
}

obj = new DataHolder ("Javascript Program")
obj.show()
obj.changeData()
obj.show()