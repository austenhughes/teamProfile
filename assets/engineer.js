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
    {
      type: 'input',
      name: 'github',
      message: 'what is your github username?',
    },
  ]);

    engineerQuestions(); 
    function engineerQuestions () {
      promptUser().then((answers) => {
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
      console.log(answers);
      console.log(Engineer);
      console.log(engineer)
      })
    };

    class Engineer {
      constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
      }
    };

    module.exports = Engineer;
