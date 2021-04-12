const path = require("path");
const fs = require("fs");

const templateDir = path.resolve(__dirname, "../html");

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
  let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf8");//what is templatesDir?
  template = replaceInfo(template, "name", manager.getName());
  template = replaceInfo(template, "role", manager.getRole());
  template = replaceInfo(template, "email", manager.getEmail());
  template = replaceInfo(template, "id", manager.getId());
  template = replaceInfo(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8");
  template = replaceInfo(template, "name", engineer.getName());
  template = replaceInfo(template, "role", engineer.getRole());
  template = replaceInfo(template, "email", engineer.getEmail());
  template = replaceInfo(template, "id", engineer.getId());
  template = replaceInfo(template, "github", engineer.getGitHub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8");
  template = replaceInfo(template, "name", intern.getName());
  template = replaceInfo(template, "role", intern.getRole());
  template = replaceInfo(template, "email", intern.getEmail());
  template = replaceInfo(template, "id", intern.getId());
  template = replaceInfo(template, "school", intern.getSchool());
  return template;
};

const renderTeam = html => {
  const template = fs.readFileSync(path.resolve(templateDir, "employee.html"), "utf8");
  return replaceInfo(template, "profile", html);
};

const replaceInfo = (template, placeholderInfo, value) => {
  const pattern = new RegExp("{{ " + placeholderInfo + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;