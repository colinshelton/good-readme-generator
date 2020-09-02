const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = inquirer.prompt([
    // #Title: 
    {
        type: "input",
        name: "title",
        message: "Title: "
    },
    // ## Description: 
    {
        type: "input",
        name: "description",
        message: "Description: "
    },
    // ## Installation: 
    {
        type: "input",
        name: "installation",
        message: "Installation: "
    },
    // ## App Usage: 
    {
        type: "input",
        name: "usage",
        message: "App Usage: "
    },
    // ## Contribution: 
    {
        type: "input",
        name: "contributing",
        message: "Contributing: "
    },
    // // ## License Details: NEEDs badge for license to be added at top  
    {
        type: "list",
        name: "License Details",
        message: "License Details: ",
        choices: ['MIT license (MIT)', 'Apache License 2.0 (Apache-2.0)', '3-clause BSD license (BSD-3-Clause)', 'GNU General Public License (GPL)', 'Common Development and Distribution License 1.0 (CDDL-1.0)']
    },
    // ## Tests:
    {
        type: "input",
        name: "tests",
        message: "Tests: "
    },
    // // ## Questions: NEEDs 
    // {
    //     type: "input",
    //     name: "Questions",
    //     message: "Questions: "
    // }
])
    .then(answers => {
        // use user feedback for whatever 
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

// function to write README file
function writeToReadme(answers) {
    // some if statements depending on user input 
    return `
# ${answers.title}

## Description

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have questions contact via [Github](https://github.com/colinshelton) or [email](https://mail.google.com/mail/?view=cm&source=mailto&to=[sheltoncolint@gmail.com]). 

`};


// function to initialize program
// async function init() {
//     try {
//         const answers = await prompt();

//     }
//     return
// };

// function call to initialize program
// init();
