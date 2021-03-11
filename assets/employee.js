const inquirer = require('inquirer');

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
      const employee = new Employee (answers.name, answers.id, answers.email);
      console.log(answers);
      console.log(Employee);
      console.log(employee)
      })
    };

    class Employee {
      constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
    };

  module.exports = Employee;