const {program} = require('commander')
const pkg = require('../package.json')
const config = require('./config')
program.version(pkg.version)

function rouch(){
    config(program)    
    program.parse(process.argv)
}

module.exports = rouch