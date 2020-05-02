class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'bot tola';
    }
}

const student1 = new Student(111, 'Mono');
const student2 = new Student(121, 'Mohon');
console.log(student1, student2);