class Hocsinh {
    constructor(name) {
      this.name = name;
      this.courses = [];
      this.grades = new Map();
    }
  
    registerForCourse(course) {
      this.courses.push(course);
    }
  
    setGrade(course, grade) {
      this.grades.set(course, grade);
    }
  }
  
  class Course {
    constructor(name) {
      this.name = name;
      this.students = [];
    }
  
    enrollStudent(student) {
      this.students.push(student);
    }
  }
  
  class Grade {
    constructor(score) {
      this.score = score;
    }
  }
  