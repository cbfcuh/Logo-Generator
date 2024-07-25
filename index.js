const inquirer = require("inquirer");
const { createSVG } = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter 3 letters for the Logo',
        validate: function (input) {
            if (input.length > 3 || input.length < 3) {
                return 'Please enter no more or less than 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color or hexadecimal:',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Please choose from the provided shapes.',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color or hexadecimal:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const logoData = createSVG(answers);
        writeToFile('logo.svg', logoData);
    });
}

init();
