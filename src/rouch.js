const parseInput = require('./parseInput')
const launchInteractiveMode = require('./launchInteractiveMode')
const generateTemplate = require('./generateTemplate')
const {hasOptions} = require('./utilities')

async function rouch(){
    let program = parseInput()
    let options = {}
    if(hasOptions(program)){
        options = program.opts()
        console.log(options)
        generateTemplate(options)
    }
    else {
        try {
            options = await launchInteractiveMode()
            generateTemplate(options)
        } catch(e){
            console.log(e)
        }
    }
       
}



module.exports = rouch