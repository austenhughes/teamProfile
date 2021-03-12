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
        // console.log(answer);
        choice = answer;
        // console.log(choice)

        // if (choice="Employee"){
        //   console.log("employee")
        // }else if (choice="Manager"){
        //   console.log("manager")
        // }else if (choice="Intern"){
        //   console.log("intern")
        // }else if (choice="Engineer"){
        //   console.log("engineer")
        // }else{
        //   console.log("unknown")
        // }

        send();

      })
    };
    
    function send(){
      console.log(choice)
            //switch for question set
            switch(choice) {
              case 'Employee':
                console.log("Employee")
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
                // code block
            }
    }

    


  


