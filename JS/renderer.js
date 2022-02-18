const path = require("path");
const fs = require("fs");



const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.JobType === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.JobType === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.JobType === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderindex(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.Name);
  template = replacePlaceholders(template, "jobType", manager.JobType);
  template = replacePlaceholders(template, "email", manager.Email);
  template = replacePlaceholders(template, "id", manager.Id);
  template = replacePlaceholders(template, "officeNumber", manager.OfficeNumber);
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.Name);
  template = replacePlaceholders(template, "jobType", engineer.JobType);
  template = replacePlaceholders(template, "email", engineer.Email);
  template = replacePlaceholders(template, "id", engineer.Id);
  template = replacePlaceholders(template, "github", engineer.Github);
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.Name);
  template = replacePlaceholders(template, "jobType", intern.JobType);
  template = replacePlaceholders(template, "email", intern.Email);
  template = replacePlaceholders(template, "id", intern.Id);
  template = replacePlaceholders(template, "school", intern.School);
  return template;
};

const renderindex = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

module.exports = render