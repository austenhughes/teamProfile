const inquirer = require('inquirer');
const Manager = require("./manager");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Intern = require("./intern");

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

   start(); 
    function start () {
      promptUser().then((answers) => {
        //switch for question set
      })
    };

  Employee.employeeQuestions()

  Manager.managerQuestions() 

  Engineer.engineerQuestions() 

  Intern.internQuestions() 

  addAnother() 

  generateProfile() 
  


