/* 
1.D
2.C
3.B
4.A
5.A
6.A
7.D
8.C
 */

// CÂU 9 xóa ẩn tử k phải number r bình phương lên
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
let mbinhphuong = m.filter(item => typeof item === 'number').map(item => Math.pow(item, 2));
console.log(mbinhphuong);



// CÂU 10 chuyển string thành array rồi xóa bỏ các phần tử có giá trị là "" và các chữ hoa chuyển thành chữ thường
let str = "High knowledge, high return";
let arr = str.split(" ").filter(item => item !== "").map(item => item.toLowerCase());
console.log(arr);



// CÂU 11 hệ thống quản lý nhân viên như sau 
class Employee {
    constructor(name, salary) {
      (this.name = name),(this.salary = salary)
    }
  
    displayInfo() {
      console.log(`Employee: ${this.name}, Salary: ${this.salary}`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary),(this.department = department)
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Manager of ${this.department} department`);
    }
  }
  
  // thực hiện thử nee :)
  let emp1 = new Employee("Huy beu", -5000);
  let manager1 = new Manager("VNgoc deptrai", 8000, "MRK");
  
  emp1.displayInfo(); 
  manager1.displayInfo(); 
  