const inquirer = require('inquirer');
const fs = require('fs');

let manager = "";

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
    {
      type: 'input',
      name: 'office',
      message: 'what is your email office #?',
    },
  ]);

  const generateHTML = (answers) =>
  `  
  <div class="card">
  <div class="name"> Name : ${answers.name}</div>
  <div> ID : ${answers.id}.</div>
  <div><a href="mailto:${answers.email}">Email : ${answers.email}</a></div>
  <div> Office : ${answers.office}</div>
  </div>
`;

    managerQuestions(); 
    function managerQuestions () {
      promptUser().then((answers) => {
      manager = new Manager (answers.name, answers.id, answers.email, answers.office);
      console.log(answers);
      console.log(Manager);
      console.log(manager);
      html = generateHTML(answers);
      addInfo ();
      })
    };

    function addInfo(){
      fs.appendFile('profile.html', html , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }

    class Manager {
      constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
      }
    };

  module.exports = Manager;