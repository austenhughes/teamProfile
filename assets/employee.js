const inquirer = require('inquirer');
const fs = require('fs');

let employee = "";
let html = "";

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

  const generateHTML = (answers) =>
  ` 
  <div class="card">
  <div class="name"> Name : ${answers.name}</div>
  <div> ID : ${answers.id}.</div>
  <div><a href="mailto:${answers.email}">Email : ${answers.email}</a></div>
</div>

</div>
</body>
</html>`;

    employeeQuestions(); 
    function employeeQuestions () {
      promptUser().then((answers) => {
      employee = new Employee (answers.name, answers.id, answers.email);
      console.log(answers);
      console.log(Employee);
      html = generateHTML(answers);
      addInfo();
      })
    };

    function addInfo(){
    fs.appendFile('profile.html', html , function (err) {
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