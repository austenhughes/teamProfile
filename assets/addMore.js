const inquirer = require('inquirer');

const questions = () =>
  inquirer.prompt([
    {
      type:'list',
      name:'addMore',
      message:' add another team member?',
      choices : [
        "Yes",
        "No"
      ]
    },
   ]);

   start(); 
    function start () {
      questions().then((answers) => {
        console.log(answers)
        })
    };