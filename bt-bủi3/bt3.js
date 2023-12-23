class Student{
    constructor( name, age, grade, course, subject, gpa){
        (this.name = name),(this.age = age ), (this.grade = grade), (this.course = course), (this.subject = subject),(this.gpa = gpa)
    }
    getCourse(){
        return course
    }
    addCourse(course){
        this.course.appendChild(course)
    }
}
const Ngoc = new Student("Ngọc", 14, 9,"JSI03","programing",9.0)
console.log(Ngoc)
class Course{
    
}