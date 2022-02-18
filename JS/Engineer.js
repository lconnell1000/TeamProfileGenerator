//define and export the engineer class which will inherit from employee class

const employee = require("./Employee");

class Engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.jobType = "Engineer";
  }

  get Github() {
    return this.github;
  }

  get JobType() {
    return this.jobType;
  }
}

module.exports = Engineer;
