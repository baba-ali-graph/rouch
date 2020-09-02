const {program} = require('commander')
const pkg = require('../package.json')
program.version(pkg.version)

function parseInput() {
    loadOptions(program)
    program.parse(process.argv)
    return program
}

function loadOptions(program){
     program.option('-p, --path <where>', 'Path to generate the template', './')
            .option('-n, --name <name>', 'The name of the component')
            .option('-t, --template <template>', 'The kind of template that you want to generate', 0)
            .option('-o, --overwrite', 'Overwrites an existing component in the given path', false)
}


module.exports = parseInput

