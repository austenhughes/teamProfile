const inquirer = require('inquirer');
const fs = require('fs');

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
        console.log(answer)
        if (answer="Yes"){
          console.log("yes")
        }else{
          close();
        }
        })
    };

    function close(){
      fs.appendFile('profile.html', html , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      }