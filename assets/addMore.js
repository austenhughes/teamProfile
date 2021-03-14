const inquirer = require('inquirer');
const fs = require('fs');

// const chooseRole = require('./chooseRole');

let selected = "";

// const addMore = choice =>{

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

   const html =
   ` 
   </div>
   </body>
   </html>
 `;

    start(); 
    function start() {
      questions().then((answer) => {
        selected = answer.addMore
        console.log(selected)
        choose();
        })
    };

    function choose () {

      switch(selected) {
        case 'Yes':
          console.log("yes")
          // chooseRole.makeChoice();
          break;
        default:
            console.log("done")
            // close();
        }
    };

    function close(){
      fs.appendFile('profile.html', html , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }
    // }

    // module.exports = addMore();