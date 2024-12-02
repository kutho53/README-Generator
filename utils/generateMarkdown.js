// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // function renderLicenseBadge(license) {
  //   if(!license){
  //     return '';
  //   }

  //   return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  // }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

  // function renderLicenseLink(license) {
  //   if(!license){
  //     return '';
  //   }

  //   return `![License](https://choosealicense.com/licenses/)`;
  // }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const addLicenseToTable = license => {
  if(!license){
    return '';
  }

  return `* [License](#License)`;
}

function generateLicenseSection(license) {
  let licenseBadge = '';
  let licenseNotice = '';

  // Define licenses and their badges
  switch (license) {
      case 'MIT_License':
        console.log ('went here')
          licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)';
          licenseNotice = 'This project is licensed under the MIT License.';
          break;
      case 'Apache_License_2.0':
          licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)';
          licenseNotice = 'This project is licensed under the Apache 2.0 License.';
          break;
      case 'GNU_GPLv3':
          licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)';
          licenseNotice = 'This project is licensed under the GPL 3.0 License.';
          break;
      case '':
          licenseBadge = '';
          licenseNotice = 'This project is not licensed.';
          break;
  }
console.log (license)
console.log (licenseBadge)
  // Return the formatted license section
  return `
  ## License
  ${licenseBadge}

  ${licenseNotice}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#Usage)
  ${addLicenseToTable(data.license)}
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ${generateLicenseSection(data.license[0])}

  ## Contributing
  ${data.contributing}

   ## Test
  ${data.test}

   ## Questions
  My Github username is ${data.userName} , if you would like to visit my GitHub page the link is:  (https://github.com/${data.userName})
  
  For further quesitons please reach out via email: ${data.email}

`;
}

export default generateMarkdown;
