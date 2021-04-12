
//constructor functions to require
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");

//do i need to add const Employee?

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "profile_generated");//dirname, variable that exists in node that holds the path, path is a library and dirname is a variable in node
const outputPath = path.join(OUTPUT_DIR, "profile.html");
const generate = require("./generate");//render can be changed and lib can be changed to util
const { prompt } = require("inquirer");

const team = [];
let employee = [];


//the functions below will confirm user input the validator functions, 
const confirmId = (input) => {
  if (isNaN(input) || input === "" || input === "0") {
    return "Please enter a number greater than zero";
  } else {
    return true;
  }
};

const confirmEmail = (input) => {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input) || input === "") {
    return true;
  } else {
    return "Please enter an email";
  }
};

const confirmInput = (input) => {
  if (input === "") {
    return "Please do not leave section blank";
  } else {
    return true;
  }
};

//the following will prompt for user input in the command line

const selections = {
  message: "Please select one of the roles to add",
  type: "list",
  name: "role",
  choices: ["Add Manager Role", "Add Engineer Role", "Add Intern Role", "No More Roles to Add, Exit"], 
};

const manager = {
  message: "What is the manager's office number?",
  type: "input",
  name: "officeNumber",
  validate: confirmInput,
};

const engineer = {
  message: "What is the engineer's GitHub username?",
  type: "input",
  name: "GitHub",
  validate: confirmInput,
};

const intern = {
  message: "What school did the intern attend?",
  type: "input",
  name: "school",
  validate: confirmInput,
};

//function to get employee data for all roles

function gatherEmployeeData() {
  employee = [
    {
      message: "What is the employee's name?",
      type: "input",
      name: "name",
      validate: confirmInput,
    },
    {
      message: "What is the employee's ID number?",
      type: "input",
      name: "id",
      validate: confirmId,
    },
    {
      message: "What is the employee's email address?",
      type: "input",
      name: "email",
      validate: confirmEmail,
    },
  ];

  inquirer.prompt(selections).then((response) => {
    switch (response.role) { //switch statement, a type of conditional statement, different way to write it
      case "Add Manager Role": 
        addManager();
        break;
      case "Add Engineer Role":
        addEngineer();
        break;
      case "Add Intern Role":
        addIntern();
        break;
      case "No Roles to Add, Exit":
        getTeam();
        break;
    }
  });
}

function getTeam() {
  const html = generate(team);
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("Success! Your employee team is created!");
  });
}

function addManager() {
  employee.push(manager);
  prompt(employee).then((response) => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    team.push(manager);
    gatherEmployeeData();
  });
}

function addEngineer() {
  employee.push(engineer);
  prompt(employee).then((response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.GitHub);
    team.push(engineer);
    gatherEmployeeData();
  });
}

function addIntern() {
  employee.push(intern);
  prompt(employee).then((response) => {
    const intern = new Intern(response.name, response.id, response.email, response.school);
    team.push(intern);
    gatherEmployeeData();
  });
}

gatherEmployeeData();