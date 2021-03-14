const fs = require('fs');
const { start } = require('repl');
// const chooseRole = require('./chooseRole');

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
      // console.log('Saved!');
    });
    // chooseRole.start();
    }