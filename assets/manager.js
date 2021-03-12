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

    managerQuestions(); 
    function managerQuestions () {
      promptUser().then((answers) => {
      manager = new Manager (answers.name, answers.id, answers.email, answers.office);
      console.log(answers);
      console.log(Manager);
      console.log(manager);
      addInfo ();
      })
    };

    function addInfo(){
      fs.appendFile('index.html', JSON.stringify(manager) , function (err) {
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