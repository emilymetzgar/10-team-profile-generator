//parent class to extend over child classes
//all classes will access this data, and then be customized
//to grab specific data for their classes 

const Employee = require("./employee");
	
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern; //exports it from here, only if it is imported, and it is imported with require