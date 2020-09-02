const  {jsTemplate, pkgJsonTemplate, sassTemplate, testTemplate} = require('./utilities/template')
const templateTypes = require('./templateTypes')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

module.exports = function(options){
    let {name, path, template, overwrite} = options
    let componentFolderObj = generateFilesContents(name, template)
    writeContentsToPath(componentFolderObj, path, name, overwrite)
}

function generateFilesContents(name, template){
    let jsFileContents = jsTemplate(name)
    let pkgJsonFileContents = pkgJsonTemplate(name)
    let sassFileContents = sassTemplate(name)
    let testFileContents = testTemplate(name)
    let componentFolderObj = {jsFileContents, pkgJsonFileContents}

    if (template === 0) {
        componentFolderObj = {...componentFolder, testFileContents}
    }
    else if (template === 1) {
        componentFolderObj = {...componentFolder, testFileContents, sassFileContents}
    }
    else if (template === 2) {
        componentFolderObj = {...componentFolder, sassFileContents} 
    }
    return componentFolderObj
}


function writeContentsToPath(contents, pathTo, name, overwrite) {
    let writePath = path.resolve(process.cwd(), pathTo, name)
    debugprint(writePath)
    try {
        let done = createDirectory(writePath, overwrite)
        for(let key in contents) {
            let [extension, ...matchArray] = key.match(/js|test|sass|pkgjson/i)
            debugprint(extension, "green")
            let filename = extension === "pkgJson" ? "package.json" : `${name}.${extension}`
            let fileWritePath = path.resolve(writePath, filename)
            console.log(extension)
            console.log(fileWritePath)
            fs.writeFileSync(fileWritePath, contents[key])
            }
        debugprint(`done: ${name} created !`,'green')
        return true
    } catch(e) {
        handleErrors(e)
    }
}
    
function debugprint(s, color="red"){
    console.log(chalk[color].bold(s))
}
    
function createDirectory(writePath, overwrite) {
    if(fs.existsSync(writePath)) {
         if(overwrite === true) {
             throw new Error("FILE_EXISTS")
         }
         deleteDirectory(writePath)
    }
    fs.mkdirSync(writePath, {recursive: true})
    return true
}

function deleteDirectory(dirPath) {
    let dirContents = fs.readdirSync(dirPath)
    console.log(dirContents)
    if(dirContents.length < 1) {
        fs.rmdir(writePath)
        return
    }
    for (let content of dirContents){
        let fullPath = path.join(dirPath, content)
        if(fs.lstatSync(fullPath).isDirectory()){
            deleteDirectory(fullPath)
        }
        else {
            fs.unlinkSync(fullPath)
        }
    }
    fs.rmdirSync(dirPath)
}




function handleErrors(e) {
    console.log(e)
    switch(e){
        case "FILE_EXISTS":
            debugprint("It seems the folder already exists in this location, -o overwrites the directory")
        default:
            debugprint("An error occured")
    }
}