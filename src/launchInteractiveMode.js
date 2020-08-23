const inquirer = require('inquirer')
const flavours = require('./templateTypes')

async function launchInteractiveMode(){
    const questions = generateQuestions()
    try {
        let answers =  inquirer.prompt(questions)
    } catch(err) {
        console.err(err)
    }
}

function generateQuestions() {
    return [
        {
            name: 'filename',
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
            type: 'list',
            message: 'What template do you want ?',
            choices: flavours
        }
    ]
}

function handleAnswers(answers) {
    console.log(`these are the answers that you supplied!! haha \n`)
    console.dir(answers)
    return answers
}

function handleErrors(err){
    console.err(err)
}

module.exports = launchInteractiveMode