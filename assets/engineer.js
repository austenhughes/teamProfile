const inquirer = require('inquirer');
const fs = require('fs');

let engineer = "";

  const promptUserEngineer = () =>
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
      name: 'github',
      message: 'what is your github username?',
    },
  ]);

  const generateHTMLEngineer = (answers) =>{
  ` 
  <div class="card">
    <div class="name"> Name : ${answers.name}</div>
    <div> ID : ${answers.id}.</div>
    <div><a href="${answers.github}" target="_blank">GitHub : ${answers.github}</a></div>
    <div><a href="mailto:${answers.email}">Email : ${answers.email}</a></div>
  </div>
`
};


    engineerQuestions(); 
    function engineerQuestions () {
      promptUserEngineer().then((answers) => {
      engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
      html = generateHTMLEngineer(answers);
      addInfoEngineer ();
      })
    };

    function addInfoEngineer(){
      fs.appendFile('profile.html', html , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }

    class Engineer {
      constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
      }
    };

    module.exports = Engineer;
