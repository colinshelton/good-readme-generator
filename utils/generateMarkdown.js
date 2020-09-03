// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  ## Description
  ${answers.description}
  
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
  
  ${answers.license}
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  If you have questions contact via [Github](https://github.com/colinshelton) or [email](https://mail.google.com/mail/?view=cm&source=mailto&to=[sheltoncolint@gmail.com]). 
  
`;
}

module.exports = generateMarkdown;
