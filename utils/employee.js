//parent class to extend over child classes
//all classes will access this data, and then be customized
//to grab specific data for their classes 

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
  }
  module.exports = Employee;
  