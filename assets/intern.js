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

  const generateHTML = (answers) =>
  `  
  <div class="card">
  <div class="name"> Name : ${answers.name}</div>
  <div> ID : ${answers.id}.</div>
  <div><a href="mailto:${answers.email}">Email : ${answers.email}</a></div>
  <div> School : ${answers.school}</div>
  </div>
`;

    engineerQuestions(); 
    function engineerQuestions () {
      promptUser().then((answers) => {
      intern = new Intern (answers.name, answers.id, answers.email, answers.school);
      console.log(answers);
      console.log(Intern);
      console.log(intern);
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

    class Intern {
      constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
      }
    };

    module.exports = Intern;
