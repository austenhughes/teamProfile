const inquirer = require('inquirer');
const fs = require('fs');

let intern = "";


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
      name: 'school',
      message: 'what is school do you attened?',
    },
  ]);

    engineerQuestions(); 
    function engineerQuestions () {
      promptUser().then((answers) => {
      intern = new Intern (answers.name, answers.id, answers.email, answers.school);
      console.log(answers);
      console.log(Intern);
      console.log(intern)
      addInfo ();
      })
    };

    function addInfo(){
      fs.appendFile('index.html', JSON.stringify(intern) , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }

    class Intern {
      constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
      }
    };

    module.exports = Intern;
