const Manager = require("./JS/Manager");
const Engineer = require("./JS/Engineer");
const Intern = require("./JS/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const render = require("./JS/Renderer");
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
        const newManager = new Manager(answers.name, answers.officeNumber, answers.iD, answers.email)
        team.push(newManager)
        newEmployee() 
        function newEmployee () {

        }