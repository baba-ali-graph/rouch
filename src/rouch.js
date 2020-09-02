const parseInput = require('./parseInput')
const launchInteractiveMode = require('./launchInteractiveMode')
const generateTemplate = require('./generateTemplate')
const {hasOptions} = require('./utilities')

async function rouch(){
    let program = parseInput()
    if(hasOptions(program)){
        options = program.opts()
        console.log(options)
        generateTemplate(options)
    }
    else {
        try {
            let options = await launchInteractiveMode()
            generateTemplate(options)
        } catch(e){
            console.log(e)
        }
    }
       
}



module.exports = rouch