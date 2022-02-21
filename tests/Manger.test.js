const Manager = require("../JS/Manager");

test("should create a Manager object which is an object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toEqual("object");
    });

    test("should create a manager object which containes, name, id email and ofice number", () => {
        const manager = new Manager ('Lachie', 111, 'lconnell1000@gmail.com', '1');

        expect(manager.name).toEqual('Lachie');
        expect(manager.id).toEqual(111);
        expect(manager.email).toEqual('lconnell1000@gmail.com');
        expect(manager.officeNumber).toEqual('1')
    });

    test("expect job type to be Manager", () => {
        const manager= new Manager();
        expect(manager.jobType).toEqual("Manager");

    });