const inquirer = require("inquirer");
const Manager = require("./JS/Manager");
const Engineer = require("./JS/Engineer");
const Intern = require("./JS/Intern");


const path = require("path");
const fs = require("fs");
const team = [];
const render = require("./JS/renderer");


function manager () {
    inquirer.prompt ([
        {
            name: 'name',
            message: 'Please enter manager name',
        },
        {
            name: 'officeNumber',
            message: 'Please enter managers office number'
        },
        {
            name: 'id',
            message: 'please enter mangers id',
        },
        {
            name: 'email',
            message: 'please enter managers email',
        },
    ])
    .then(answers => {
        const newManager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(newManager)
        newEmployee() 
        function newEmployee () {
            inquirer.prompt ( [{
                type: 'list',
                name: 'jobType',
                message: 'select type of employee to create or select end if all employees added',
                choices: ['engineer', 'intern', 'end'],
            },
            ])
            .then(answers => {
                console.log(answers)
                if (answers.jobType === 'engineer') {
                    console.log("engineer")
                    inquirer.prompt ([{
                        name: 'name',
                        message: 'please enter engineers name',
                    },
                    {
                        name: 'github',
                        message: 'what is the engineers github username',
                    },
                    {
                        name: 'id',
                        message: 'please enter engineers id',
                    },
                    {
                        name: 'email',
                        message: 'please enter engineers email',
                    },
                ])
                .then(answers => {
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        team.push(newEngineer)
                        //console.log(team)
                        newEmployee()
                })}
                    else if (answers.jobType === 'intern') {
                        console.log("intern")
                        inquirer.prompt ([
                            {
                                name: 'name',
                                message: 'please enter the interns name'
                          },
                          {
                              name: 'school',
                              message: 'please enter the interns school',
                          },
                          {
                            name: 'id',
                            message: 'please enter interns id',
                        },
                        {
                            name: 'email',
                            message: 'please enter interns email',
                        },
                        ])
                        .then(answers => {
                            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
                            team.push(newIntern)
                            newEmployee()
                    })}
                    else if (answers.jobType === 'end') {
                        console.log("thankyou for entering all employees details")
                        createHTML(team);
                    }

                    else {
                        console.log("ERROR")
                    }
                });
            }

        });}

        manager()

            function createHTML(team) {
                const html = render(team, "My Team")

                fs.writeFile("./output/myteam.html", html, (err) => {

                    if (err) {
                        return console.log(err);
                    }

                    console.log("myteam html created successfully!")
                })
            }
        