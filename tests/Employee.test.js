

const Employee = require("../JS/Employee");


test("should create an employee object which is an object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual("object");
    });



    test("should create an employee object which containes, name, id and email", () => {
        const employee = new Employee ('Lachie', 111, 'lconnell1000@gmail.com');

        expect(employee.name).toEqual('Lachie');
        expect(employee.id).toEqual(111);
        expect(employee.email).toEqual('lconnell1000@gmail.com');
    });

    test("expect job type to be employee", () => {
        const employee = new Employee();
        expect(employee.jobType).toEqual("Employee");

    });
