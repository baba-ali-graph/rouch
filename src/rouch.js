const inquirer = require('inquirer')

let rouch = () => {
    const questions = generateQuestions()
    inquirer.prompt(questions)
    .then(handleAnswers)
}

function generateQuestions() {
    return [
        {
            name: 'username',
            type: 'input',
            message: 'What is your username'
        },
        {
            name: 'password',
            type: 'password',
            message: 'A secret something that you know !! :)'
        },
        {
            name: 'gender',
            type: 'list',
            message: 'Monsiuer aur Madmosielle',
            choices: ['male', 'female']
        }
    ]
}

function handleAnswers(answers) {
    console.log(`these are the answers that you supplied!! haha \n`)
    console.dir(answers)
}

module.exports = rouch