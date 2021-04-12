const path = require("path");
const fs = require("fs");

const generatedHtmlDir = path.resolve(__dirname, "../html");

const render = profile => {
  const html = [];

  html.push(...profile
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...profile
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...profile
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderTeam(html.join(""));

};

const renderManager = manager => {
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "manager.html"), "utf8");
  generatedHtml = replaceInfo(generatedHtml, "name", manager.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", manager.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", manager.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", manager.getId());
  generatedHtml = replaceInfo(generatedHtml, "officeNumber", manager.getOfficeNumber());
  return generatedHtml;
};

const renderEngineer = engineer => {
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir "engineer.html"), "utf8");
  generatedHtml = replaceInfo(generatedHtml, "name", engineer.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", engineer.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", engineer.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", engineer.getId());
  generatedHtml = replaceInfo(generatedHtml, "GitHub", engineer.getGitHub());
  return generatedHtml;
};

const renderIntern = intern => {
  let generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "intern.html"), "utf8");
  generatedHtml = replaceInfo(generatedHtml, "name", intern.getName());
  generatedHtml = replaceInfo(generatedHtml, "role", intern.getRole());
  generatedHtml = replaceInfo(generatedHtml, "email", intern.getEmail());
  generatedHtml = replaceInfo(generatedHtml, "id", intern.getId());
  generatedHtml = replaceInfo(generatedHtml, "school", intern.getSchool());
  return generatedHtml;
};

const renderTeam = html => {
  const generatedHtml = fs.readFileSync(path.resolve(generatedHtmlDir, "employee.html"), "utf8");
  return replaceInfo(generatedHtml, "profile", html);
};

const replaceInfo = (generatedHtml, placeholderInfo, value) => {
  const orderOfInfo = new RegExp("{{ " + placeholderInfo + " }}", "gm");
  return generatedHtml.replace(orderOfInfo, value);
};

module.exports = render;