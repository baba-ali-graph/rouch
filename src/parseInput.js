const {program} = require('commander')
const pkg = require('../package.json')
program.version(pkg.version)

function parseInput() {
    loadOptions(program)
    program.parse(process.argv)
    return program
}

function loadOptions(program){
    program.option('-p, --path <where>', 'path to generate the template')
            .option('-f, --filename <filename>', 'The name of the files for the component you want to create')
            .option('-t, --template <template>', 'the kind of template that you want to generate')
            .option('-o, --overwrite', 'Overwrites an existing component in the given path', false)
}


module.exports = parseInput

