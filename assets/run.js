// const Manager = require("./manager");
// const Employee = require("./employee");
// const Engineer = require("./engineer");
// const Intern = require("./intern");
// const addMore = require("./AddMore");
// const chooseRole = require("./chooseRole");

// open on choose role - will need to require the 4 roles
// choose role calls selceted role - will need to require addmore 
// selected role calls addmore - will need to require choose role
// addmore calls choose role ... or ends things will console.log thank you and add bottom script tags

const fs = require('fs');

const html =
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
</div>
`;

newTeam();
function newTeam(){
    fs.appendFile('profile.html', html , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    }