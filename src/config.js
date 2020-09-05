const generateTemplate = require('./generateTemplate')

module.exports = function (program) {
    program.arguments('<path> <name> ')
           .option('-o, --overwrite', 'Overwrites an existing component in the given path (default: false)', false)
           .option('-t, --test', 'Includes test script template if set', false)
           .option('-s, --style [style]', 'Specifies the extension of style template file to generate.')
           .action(handleCall)
           .on('help', displayHelpMessage)
}

function handleCall(path, name, cmdObj) {
    let arguments = {name, path, test:cmdObj.test, overwrite:cmdObj.overwrite, style:cmdObj.style }
    generateTemplate(arguments)
}

function displayHelpMessage(){
    console.log("This is a help message !!")
}


