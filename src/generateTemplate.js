const  {jsTemplate, pkgJsonTemplate, styleTemplate, testTemplate} = require('./utilities/template')
const templateTypes = require('./templateTypes')
const Path = require('path')
const fs = require('fs')
const chalk = require('chalk')

module.exports = function(options){
    try{
        const {path, name, overwrite} = options
        const directoryPath = createDirectory(path,name,overwrite)
        createTemplateFiles(directoryPath, options)
        console.log(chalk.blue(`\n\n********************** Done :) **********************`))
    } catch(e) {
        console.error(chalk.red(e.message))
    }
}


function createDirectory(path, name, overwrite) {
    let dirPath = Path.resolve(path, name)
    if(fs.existsSync(dirPath)){
        if(overwrite)
            deleteDirectory(dirPath)
        else throw new Error("Directory already exists !")
    }
    fs.mkdirSync(dirPath, {recursive: true})
    return dirPath
}


function deleteDirectory(dirPath) {
    const contents = fs.readdirSync(dirPath)
    if(contents.length < 1)
        fs.rmdirSync(dirPath)
    else {
        for (let content of contents){
            let fullContentPath = Path.resolve(dirPath, content)
            if(fs.lstatSync(fullContentPath).isDirectory())
                deleteDirectory(fullContentPath)
            else fs.unlinkSync(fullContentPath)
        }
    }
}

function createTemplateFiles(dirPath, options) {
    let extensions = ['.js','.json']
    extensions = updateExtensions(extensions, options)
    for(let extension of extensions){
        writeTemplate(dirPath,extension, options)
    }
}


function updateExtensions(extensions, options) {
    if(options.test)
        extensions.push('.test.js')
    if(options.style)
        extensions.push(`.${options.style}`)
    return extensions
}


function writeTemplate(dirPath, extension, {name}){
    let fileContents, writePath, filename
    switch(extension){
        case '.js':
            filename = `${name}${extension}`
            writePath = Path.resolve(dirPath,filename)
            fileContents = jsTemplate(name)
            break
        case '.json':
            filename = "package.json"
            writePath = Path.resolve(dirPath, filename)
            fileContents = pkgJsonTemplate(name)
            break
        case '.test.js':
            filename = `${name}${extension}`
            writePath = Path.resolve(dirPath, filename)
            fileContents = testTemplate(name)
            break
        case '.sass':
        case '.css':
        case '.less':
        case '.styl':
        case '.scss':
            filename = `${name.toLowerCase()}${extension}`
            writePath = Path.resolve(dirPath, filename)
            fileContents = styleTemplate(name, extension)
            break
        default:
            throw new Error("Unrecognized file type")

    }
    console.log(chalk.blue("Generated "), filename)
    fs.writeFileSync(writePath, fileContents)
    return
}
