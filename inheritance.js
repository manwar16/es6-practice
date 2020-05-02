class Parent{
    constructor(){
        this.fatherName = 'A. Kalam';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return this.name + " " + this.fatherName;
    }
}

const baby = new Child('A.Rahim');
const baby2 = new Child('A.Rahman');
console.log(baby.getFullName());
console.log(baby2);
