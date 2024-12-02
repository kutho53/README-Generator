// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'License',
        choices: ['GNU_GPLv3', 'Apache_License_2.0', 'MIT_License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address'
    },
];
function promptUser() {
    return inquirer
    .prompt(questions)
    .then(answers =>{ 
        const pageMD = generateMarkdown(answers);
        writeToFile(pageMD);
});
  
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err =>{
    if (err) throw new Error(err);
        console.log('page created')
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
