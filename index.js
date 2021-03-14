const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/employee');
const Manager = require(".//lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const allEmployees = require("./src/template");

const OUTPUT_DIR = path.resolve(__dirname,"dist");
const outputPath = path.join(OUTPUT_DIR, "profile.html");

const team = [];

let choiceRole = "";
let selected = "";

const questions = () =>

  inquirer.prompt([
    {
      type:'list',
      name:'role',
      message:'select your role below : ',
      choices : [
        "Employee",
        "Manager",
        "Intern",
        "Engineer"
      ]
    }, 
   ]);

open();
function open(){
  fs.appendFile(outputPath,
    ` <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
  </head>
  <body class="body">
  <div class="container">
  <div class="header">
  <div>My Team</div>
  </div>
  `
     , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    init();
};

function init () {
  questions().then((answer) => {
    choiceRole = answer.role;
    send();
  })

function send(){
  switch(choiceRole) {
    case 'Employee':
        console.log("Employee")
        promptUserEmployee();
    break;
    case 'Manager':
        console.log("Manager");
        promptUserManager();
    break;
    case 'Intern':
        console.log("Intern"); 
        promptUserIntern();
    break;
    case 'Engineer':
        console.log("Engineer");
        promptUserEngineer();
    break;
    default:
        console.log("none")
      }
  }
};

const again = () =>
inquirer.prompt([
  {
    type:'list',
    name:'addMore',
    message:' add another team member?',
    choices : [
      "Yes",
      "No"
    ]
  },
 ]);

 function start() {
   again().then((answers) => {
     selected = answers.addMore
     console.log(selected)
     choose();
     })

 function choose () {
   switch(selected) {
     case 'Yes':
       console.log("yes");
       init();
       break;
     default:
      console.log("done");
  fs.appendFile(outputPath,
  ` 
  </div>
  </body>
  </html>
  `
      , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
 };
};

function promptUserEmployee(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email address?',
    },
  ])
  .then((data) => {
    const employee = new Employee(data.name, data.id, data.email)
    team.push(employee);
  fs.appendFile(outputPath,
  ` 
  <div class="card">
  <div class="name"> Name : ${data.name}</div>
  <div> ID : ${data.id}.</div>
  <div><a href="mailto:${data.email}">Email : ${data.email}</a></div>
  </div>
  `
     , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    start();
  })
};

function promptUserEngineer () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'what is your github username?',
    },
  ])
  .then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    team.push(engineer);
  fs.appendFile(outputPath,
  ` 
  <div class="card">
  <div class="name"> Name : ${data.name}</div>
  <div> ID : ${data.id}.</div>
  <div><a href="${data.github}" target="_blank">GitHub : ${data.github}</a></div>
  <div><a href="mailto:${data.email}">Email : ${data.email}</a></div>
  </div>
  `
      , function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    start();
  })
};

function promptUserIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'what is school do you attened?',
    },
  ])
  .then((data) => {
  const intern = new Intern (data.name, data.id, data.email, data.school)
  team.push(intern);
  fs.appendFile(outputPath,
  ` 
  <div class="card">
  <div class="name"> Name : ${data.name}</div>
  <div> ID : ${data.id}.</div>
  <div> School : ${data.school}</div>
  <div><a href="mailto:${data.email}">Email : ${data.email}</a></div>
  </div>
  `
    , function (err) {
      if (err) throw err;
      console.log('Saved!');
  });
    start();
  })
};

function promptUserManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'what is your email office #?',
    },
  ])
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.office)
    team.push(manager);
    fs.appendFile(outputPath,
    ` 
  <div class="card">
  <div class="name"> Name : ${data.name}</div>
  <div> ID : ${data.id}.</div>
  <div> Office # : ${data.office}</div>
  <div><a href="mailto:${data.email}">Email : ${data.email}</a></div>
  </div>
  `
      , function (err) {
      if (err) throw err;
      console.log('Saved!');
  });
    start();
  })
};