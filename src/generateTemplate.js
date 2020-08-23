const  {jsTemplate, pkgJsonTemplate, sassTemplate, testTemplate} = require('./utilities/template')
const templateTypes = require('./templateTypes')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

module.exports = function(options = {}){
    let {filename, path, template } = options
    console.log(`the path: ${path}`)
    let componentFolderObj = generateFilesContents(filename)
    debugprint(componentFolderObj, 'green')
    writeContentsToPath(componentFolderObj, path, filename)
}

function generateFilesContents(name, templateType){
    let jsFileContents = jsTemplate(name)
    let pkgJsonFileContents = pkgJsonTemplate(name)
    let sassFileContents = sassTemplate(name)
    let testFileContents = testTemplate(name)
    let componentFolderObj = {jsFileContents}

    if (templateType === templateTypes[0]) {
        componentFolderObj = {...componentFolder, testFileContents}
    }
    else if (templateType === templateTypes[1]) {
        componentFolderObj = {...componentFolder, testFileContents, sassFileContents}
    }
    else if (templateType === templateTypes[2]) {
        componentFolderObj = {...componentFolder, sassFileContents} 
    }
    return componentFolderObj
}


function writeContentsToPath(contents, pathTo, name) {
    let writePath = path.resolve(process.cwd(), pathTo, name)
    debugprint(writePath)
    for(let key in contents) {
        let [extension, ...matchArray] = key.match(/js|test|sass/)
        let done = fs.mkdirSync(writePath, {recursive:true})
        if(done){
            let fileWritePath = path.resolve(writePath,`${name}.${extension}`)
            console.log(extension)
            console.log(fileWritePath)
            fs.writeFileSync(fileWritePath, contents[key])
        }
        else debugprint(`can't print information`)
        
    }
    debugprint(`done: ${name} created !`,'green')
}
    
function debugprint(s, color="red"){
    console.log(chalk[color].bold(s))
}
    







