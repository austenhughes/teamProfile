const inquirer = require('inquirer');
// const employee = require('./employee');
// const Manager = require("./manager");
// const Employee = require("./employee");
// const Engineer = require("./engineer");
// const Intern = require("./intern");
// const addMore = require("./addMore");

let choiceRole = "";

// function makeChoice() {

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
      questions().then((answer) => {
        choiceRole = answer.role;
        // console.log(Employee)
        send();
      })

      function send(){
      switch(choiceRole) {
            case 'Employee':
              console.log("Employee")
              getEmployee();
              // Employee.employeeQuestions()
              break;
            case 'Manager':
              console.log("Manager");
              // Manager.managerQuestions()
              break;
            case 'Intern':
              console.log("Intern");
              // Intern.internQuestions() 
              break;
            case 'Engineer':
              console.log("Engineer");
              // Engineer.engineerQuestions() 
              break;
            default:
              console.log("none")
          }
        }
          };
        // }

        // module.exports = makeChoice ();

  


    


  


