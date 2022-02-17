const Manager = require("./JS/Manager.js");
const Engineer = require("./JS/Engineer");
const Intern = require("./JS/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const render = require("./JS/renderer");
const { listenerCount } = require("process");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

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
            name: 'iD',
            message: 'please enter mangers id',
        },
        {
            name: 'email',
            message: 'please enter managers email',
        },
    ])
    .then(answers => {
        const newManager = new Manager (answers.name, answers.iD, answers.email, answers.officeNumber)
        team.push(newManager)
        newEmployee() 
        function newEmployee () {
            inquirer.prompt ( [{
                type: 'list',
                name: 'jobType',
                message: 'select type of employee or select end if all employees added',
                choices: ['engineer', 'intern', 'end'],
            },
            ])
            .then(answers => {
                console.log(answers)
                if (answers.jobTpye === 'engineer') {
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
                        name: 'iD',
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
                        newEmployee()
                })}
                    else if (answers.jobTpye === 'intern') {
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
                            name: 'iD',
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
                    else {
                        console.log("thankyou for entering all employees details")
                        createHTML(team);
                    }

            function createHTML(team) {
                const html = render(team, "My Team")

                fs.writeFile("./output/myteam.html", html, (err) => {

                    if (err) {
                        return console.log(err);
                    }

                    console.log("myteam html created successfully!")
                })
            }
        })}})}