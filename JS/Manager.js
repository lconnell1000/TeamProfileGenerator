//define and export the manager class which will inherit from employee class

const employee = require("./Employee");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.jobType = "Manager";
  }

  get OfficeNumber() {
    return this.officeNumber;
  }

  get JobType() {
    return this.jobType;
  }
}

module.exports = Manager;
