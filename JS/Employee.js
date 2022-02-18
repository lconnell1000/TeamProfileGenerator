//define and export the employee class (parent class of others)

class employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.jobType = "employee"
    }

    get Name() {
        return this.name
    }

    get Id() {
        return this.id
    }

    get Email () {
        return this.email
    }

    get JobType() {
        return this.jobType
    }
}

module.exports = employee