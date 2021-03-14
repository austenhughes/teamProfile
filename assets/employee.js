const inquirer = require('inquirer');
const fs = require('fs');

// const addMore = require('./addMore');
// const chooseRole = require('./chooseRole');

let employee = "";
let htmlEmployee = "";

// function getEmployee() {

  const promptUserEmployee = () =>
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

  const generateHTMLEmployee = (answers) =>
  ` 
  <div class="card">
  <div class="name"> Name : ${answers.name}</div>
  <div> ID : ${answers.id}.</div>
  <div><a href="mailto:${answers.email}">Email : ${answers.email}</a></div>
  </div>
  `;

    employeeQuestions(); 
    function employeeQuestions () {
      promptUserEmployee().then((answers) => {
      employee = new Employee (answers.name, answers.id, answers.email);
      console.log(answers);
      console.log(Employee);
      htmlEmployee = generateHTMLEmployee(answers);
      addInfoEmployee();
      })
    };

    function addInfoEmployee(){
    fs.appendFile('profile.html', htmlEmployee , function (err) {
      if (err) throw err;
      console.log('Saved!');
      addMore.start();
    });
    };

    class Employee {
      constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
    };
  // };

  module.exports = Employee;

  