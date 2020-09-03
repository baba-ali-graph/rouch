exports.hasOptions = (program) => {
    let options = program.opts()
    if(options['name'])
        return true
    return false
}