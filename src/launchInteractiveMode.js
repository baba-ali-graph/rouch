const inquirer = require('inquirer')
const flavours = require('./templateTypes')

async function launchInteractiveMode(){
    const questions = generateQuestions()
    let answers =  await inquirer.prompt(questions)
    return answers
}

function generateQuestions() {
    return [
        {
            name: 'name',
            type: 'input',
            message: 'Name for component files: '
        },
        {
            name: 'path',
            type: 'input',
            message: 'Component Path(optional, defaults to cwd )',
            default: './'
        },
        {
            name: 'template',
            type: 'rawlist',
            message: 'What template do you want ?',
            choices: flavours
        }
    ]
}


module.exports = launchInteractiveMode