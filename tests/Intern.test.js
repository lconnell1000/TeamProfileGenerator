const Intern = require("../JS/Intern");

test("should create an Intern object which is an object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toEqual("object");
    });

    test("should create an intern object which containes, name, id email and school", () => {
        const intern = new Intern ('Lachie', 111, 'lconnell1000@gmail.com', 'adelaideUni');

        expect(intern.name).toEqual('Lachie');
        expect(intern.id).toEqual(111);
        expect(intern.email).toEqual('lconnell1000@gmail.com');
        expect(intern.school).toEqual('adelaideUni')
    });

    test("expect job type to be intern", () => {
        const intern= new Intern();
        expect(intern.jobType).toEqual("Intern");

    });