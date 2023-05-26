class student {
    //sno;
    //name; //not legal in es2015
    constructor(sno,name){
        this.sno = sno
        this.name = name
    }
    display() {
        console.log ("sno: ", this.sno, "Name: ", this.name)
    }
}
obj1=new student(1,"Sobana")
obj2=new student(1,"Somanathan")


obj1.display()
obj2.display()