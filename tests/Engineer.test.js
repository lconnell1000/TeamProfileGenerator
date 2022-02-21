const { expect } = require("@jest/globals");
const Engineer = require("../JS/Engineer");

test("should create an engineer object which is an object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toEqual("object");
    });

    test("should create an engineer object which containes, name, id and email", () => {
        const engineer = new Engineer ('Lachie', 111, 'lconnell1000@gmail.com', 'lconnell1000');

        expect(engineer.name).toEqual('Lachie');
        expect(engineer.id).toEqual(111);
        expect(engineer.email).toEqual('lconnell1000@gmail.com');
        expect(engineer.github).toEqual('lconnell1000')
    });


    test("expect job type to be engineer", () => {
        const engineer = new Engineer();
        expect(engineer.jobType).toEqual("Engineer");

    });