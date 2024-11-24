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
        message: 'Description'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents'
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
        choices: ['GNU_AGPLv3','GNU_GPLv3','GNU_LGPLv3','Mozilla_Publis_Liscense_2.0',
            'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'The_Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions'
    },
];
function promptUser() {
    return inquirer
    .prompt(questions)
    .then(answers =>{ 
        const pageMD = generateMarkdown(answers);
        console.log(pageMD);
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
