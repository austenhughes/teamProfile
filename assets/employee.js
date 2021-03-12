const inquirer = require('inquirer');
const fs = require('fs');

let employee = "";

  const promptUser = () =>
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
  ]);

    employeeQuestions(); 
    function employeeQuestions () {
      promptUser().then((answers) => {
      employee = new Employee (answers.name, answers.id, answers.email);
      console.log(answers);
      console.log(Employee);
      console.log(employee);
      addInfo();
      })
    };

    function addInfo(){
    fs.appendFile('index.html', JSON.stringify(employee) , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    }

    class Employee {
      constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
    };

  module.exports = Employee;