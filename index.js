const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  // #Title:
  {
    type: "input",
    name: "title",
    message: "Title: ",
  },
  // ## Description:
  {
    type: "input",
    name: "description",
    message: "Description: ",
  },
  // ## Installation:
  {
    type: "input",
    name: "installation",
    message: "Installation: ",
  },
  // ## App Usage:
  {
    type: "input",
    name: "usage",
    message: "App Usage: ",
  },
  // ## Contribution:
  {
    type: "input",
    name: "contributing",
    message: "Contributing: ",
  },
  // // ## License Details: NEEDs badge for license to be added at top
  {
    type: "list",
    name: "license",
    message: "License Details: ",
    choices: [
      "MIT license (MIT)",
      "Apache License 2.0 (Apache-2.0)",
      "3-clause BSD license (BSD-3-Clause)",
      "GNU General Public License (GPL)",
      "Common Development and Distribution License 1.0 (CDDL-1.0)",
    ],
  },
  // ## Tests:
  {
    type: "input",
    name: "tests",
    message: "Tests: ",
  },
];

// function to write README file

function writeToReadme(markDown) {
  //some if statements depending on user input
  fs.writeFileSync("./output/README.md", markDown);
}

// function to initialize program

async function init() {
  try {
    inquirer.prompt(questions).then(async (answers) => {
      const markDown = await generateMarkdown(answers);
      console.log(markDown);
      writeToReadme(markDown);
    });
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
