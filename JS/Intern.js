//define and export the intern class which will inherit from employee class

const employee = require("./Employee");

class Intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.jobType = "Intern";
  }

  get School() {
    return this.school;
  }

  get JobType() {
    return this.jobType;
  }
}

module.exports = Intern;
