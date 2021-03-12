const inquirer = require('inquirer');
// const Manager = require("./manager");
// const Employee = require("./employee");
// const Engineer = require("./engineer");
// const Intern = require("./intern");

let choice = "";


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
        console.log(answer);
        choice = answer;
        console.log(choice)

        if (answer="Employee"){
          console.log("employee")
        }else if (answer= "Manager"){
          console.log("manager")
        }else if (answer= "Intern"){
          console.log("intern")
        }else if (answer = "Engineer"){
          console.log("engineer")
        }else{
          console.log("unknown")
        }
       
        // //switch for question set
        // switch(choice) {
        //   case "Employee":
        //     console.log("Employee")
        //     // Employee.employeeQuestions()
        //     break;
        //   case "Manager":
        //     console.log("Manager");
        //     // Manager.managerQuestions()
        //     break;
        //   case "Intern":
        //     console.log("Intern");
        //     // Intern.internQuestions() 
        //     break;
        //   case "Engineer":
        //     console.log("Engineer");
        //     // Engineer.engineerQuestions() 
        //     break;
        //   default:
        //     console.log("none")
        //     // code block
        // }

      }
      )
    };


  


