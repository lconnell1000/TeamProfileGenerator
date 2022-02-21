//define and export the employee class (parent class of others)

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.jobType = "Employee";
  }

  get Name() {
    return this.name;
  }

  get Id() {
    return this.id;
  }

  get Email() {
    return this.email;
  }

}

module.exports = Employee;
