//requires this library and has to be on this file via require in order to access appropriate files via paths
const path = require("path");
const fs = require("fs");

const generatedHtmlDir = path.resolve(__dirname, "../html");//resolve resolves the path 
//const can be variable, variable can't change, 

//arrow function exporting from this file
const generate = profile => {
  
const html = []; //empty array so that the html will generate depending on what user inputs
//array methods
//Each one will iterate over an array and perform a transformation or computation. 
//Each will return a new array based on the result of the function
  html.push(...profile
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager)) //can change if needed to get
  );
  html.push(...profile
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
  );
  html.push(...profile
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
  );

  return generateTeam(html.join(""));

};
//arrow function that insertss info in html based off user input in command line
//information gets generated on html via paths and resolve resolves the path
const generateManager = manager => {
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "manager.html"), "utf8");
  generatedHtml = replaceInfo(generatedHtml, "name", manager.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", manager.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", manager.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", manager.getId());
  generatedHtml = replaceInfo(generatedHtml, "officeNumber", manager.getOfficeNumber());
  return generatedHtml;
};

const generateEngineer = engineer => {
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "engineer.html"), "utf8");
  generatedHtml = replaceInfo(generatedHtml, "name", engineer.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", engineer.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", engineer.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", engineer.getId());
  generatedHtml = replaceInfo(generatedHtml, "GitHub", engineer.getGitHub());
  return generatedHtml;
};

const generateIntern = intern => { 
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "intern.html"), "utf8");//tells file what the encoding is, 
  generatedHtml = replaceInfo(generatedHtml, "name", intern.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", intern.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", intern.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", intern.getId());
  generatedHtml = replaceInfo(generatedHtml, "school", intern.getSchool());
  return generatedHtml;
};

const generateTeam = html => {
  const generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "employee.html"), "utf8");
  return replaceInfo(generatedHtml, "profile", html);
};

const replaceInfo = (generatedHtml, placeholderInfo, value) => {
  const changeReplaceInfo = RegExp ("{{ " + placeholderInfo + " }}", "gm");
  return generatedHtml.replace(changeReplaceInfo, value);
};

module.exports = generate;//all of this exports onto team profile 