const Employee = require("./employee");//requiring the employee class
//parent class to extend over child classes
//all classes will access this data, and then be customized
//to grab specific data for their classes 	
class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }
  getGitHub() {
    return this.GitHub;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;