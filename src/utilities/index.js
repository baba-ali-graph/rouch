exports.hasOptions = (program) => {
    let options = program.opts()
    if(options['filename'])
        return true
    return false
}