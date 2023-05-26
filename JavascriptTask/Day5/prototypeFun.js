function student(sno,name) {
    this.sno = sno
    this.name = name
    console.log(this)
}

student.prototype.display = function() {
    console.log("Sno:",this.sno,"Name:",this.name)
}

//student(1,"Sobana") //window scope or global scope

obj1=new student(1,"Sobana") //separate scope for student is created
obj2=new student(1,"Somanathan")

//Student will behave like a class and student() will behave like constructor.

obj1.display()
obj2.display()






//prototype property allows us to add new properties to object constructors
//constructor is similar like methods

