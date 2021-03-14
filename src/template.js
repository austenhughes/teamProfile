// const inquirer = require('inquirer');
// const fs = require('fs');
// const Employee = require('./lib/employee');
// const Manager = require(".//lib/manager");
// const Intern = require("./lib/intern");
// const Engineer = require("./lib/engineer");

const generateCard = allEmployees => {

const generateHTMLEmployee = employee => {
  return
  ` 
  <div class="card">
  <div class="name"> Name : ${employee.getName()}</div>
  <div> ID : ${employee.getId()}.</div>
  <div><a href="mailto:${employee.getEmail()}">Email : ${employee.getEmail()}</a></div>
</div>
`;
};

const generateHTMLEngineer = engineer =>{
return
` 
<div class="card">
  <div class="name"> Name : ${engineer.getName()}</div>
  <div> ID : ${engineer.getId()}.</div>
  <div><a href="${engineer.getGithub()}" target="_blank">GitHub : ${engineer.getGithub()}</a></div>
  <div><a href="mailto:${engineer.getEmail()}">Email : ${engineer.getEmail()}</a></div>
</div>
`;
};

const generateHTMLIntern = intern =>{
return
` 
<div class="card">
  <div class="name"> Name : ${intern.getName()}</div>
  <div> ID : ${intern.getId()}.</div>
  <div> School : ${intern.getSchool()}</div>
  <div><a href="mailto:${intern.getEmail()}">Email : ${intern.getEmail()}</a></div>
</div>
`;
};

const generateHTMLManager = manager =>{
return
` 
<div class="card">
  <div class="name"> Name : ${manager.getName()}</div>
  <div> ID : ${manager.getId()}.</div>
  <div> Office # : ${manager.getOffice()}</div>
  <div><a href="mailto:${manager.getEmail()}">Email : ${manager.getEmail()}</a></div>
</div>
`;
};

const htmlArray = [];

htmlArray.push(allEmployees
  .filter(employee => employee.getRole === "Manager")
  .map(manager => generateHTMLManager(manager))
  );

htmlArray.push(allEmployees
  .filter(employee => employee.getRole === "Employee")
  .map(employee => generateHTMLEmployee(employee))
  );

htmlArray.push(allEmployees
  .filter(employee => employee.getRole === "Intern")
  .map(Intern => generateHTMLIntern(Intern))
  );

htmlArray.push(allEmployees
  .filter(employee => employee.getRole === "Engineer")
  .map(engineer => generateHTMLEngineer(engineer))
  );

 return htmlArray;
};

module.exports = allEmployees => {
  return
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="style.css">
<title>Document</title>
</head>
<body class="body">
<div class="container">
<div class="header">
<div>My Team</div>
</div>'
${generateCard(allEmployees)}
'</div>
</body>
</html>
`;
};




