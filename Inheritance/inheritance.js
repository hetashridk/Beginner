class Student{
    constructor(name){
        this.name = name
    }

    hasSubmitted(){
        console.log(`Assisgment has been submitted by ${this.name}`);
    }
}

class Teacher extends Student{
    constructor(name, email, grade){
        super(name)
        this.email = email
        this.grade = grade
    }

    course(){
        console.log(`This course is taken by ${this.name}`);
    }
}

const sts1 = new Student("Jone")
sts1.hasSubmitted()

const te1 = new Teacher("Elena", "xyz@gmail.com", "fourth")
te1.course()
// tel1.hasSubmitted()