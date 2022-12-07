// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const short = require("short-uuid");
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of your repository?\n",
        type: "input",
        name: "repoName",
    },

    {
        message: "Enter the description of your project\n",
        type: "input",
        name: "description",
    },

    {
        message: "Enter the installation instructions of your project\n",
        type: "input",
        name: "installation",
    },

    {
        message: "Enter the usage information of your project\n",
        type: "input",
        name: "usage",
    },
    {
        message: "Enter the contribution guidelines of your project\n",
        type: "input",
        name: "contribution",
    },
    {
        message: "Enter the test instructions of your project\n",
        type: "input",
        name: "test",
    },
    {
        message: "Enter your GitHub username\n",
        type: "input",
        name: "username",
    },
    {
        message: "Enter your email\n",
        type: "input",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => {
        if (err) console.log(err);
        else {
            console.log("Readme created successfully\n");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>
            writeToFile(`README_${short.generate()}.md`, generateMarkdown(data))
        );
}

// Function call to initialize app
init();
