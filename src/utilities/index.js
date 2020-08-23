exports.hasOptions = (program) => {
    let flag = false
    for(let optName in program.opts()){
        if(optName === "filename")
            flag = true
    }
    return flag
}