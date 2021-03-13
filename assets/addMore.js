const inquirer = require('inquirer');
const fs = require('fs');

let selected = "";

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
          break;
        default:
            console.log("done")
            close();
        }
      // if (selected='Yes'){
      //   console.log("yes")
      // }else{
        // close();
      // }
    };

    function close(){
      fs.appendFile('profile.html', html , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }