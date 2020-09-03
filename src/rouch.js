const parseInput = require('./parseInput')
const launchInteractiveMode = require('./launchInteractiveMode')
const generateTemplate = require('./generateTemplate')
const {hasOptions} = require('./utilities')
const templatesTypes = require('./templateTypes')

async function rouch(){
    let program = parseInput()
    if(hasOptions(program)){
        options = program.opts()
        options = {...options, template: templatesTypes[options.template]}
        generateTemplate(options)
    }
    else {
        try {
            let options = await launchInteractiveMode()
            console.log(options)
            generateTemplate(options)
        } catch(e){
            console.log(e)
        }
    }
       
}



module.exports = rouch