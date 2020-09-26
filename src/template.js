exports.jsTemplate = function (componentName = "-----") {
return `import React from 'react'
function ${componentName}(){
    
    return(
        <div>
        </div>
    )
}

export default ${componentName}
`
}

exports.pkgJsonTemplate = function (componentName = "----") {
return `{
    "main": "./${componentName}"
}
`
}

exports.styleTemplate = function (componentName = "-----") {
return `.${componentName}`
}

exports.testTemplate = function (componentName = "-----") {
return `import ${componentName} from './componentName'
describe('it renders successfully', () => {
    let wrapper = shallow(<App/>)
})
`
}