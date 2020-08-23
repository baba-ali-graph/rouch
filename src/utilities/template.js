exports.jsTemplate = (componentName = "-----") => `
import React from 'react'

function ${componentName}(){
    
    return(
        <div>
        </div>
    )
}

export default ${componentName}
`

exports.pkgJsonTemplate = (componentName = "----") => `
{
    "main": "./${componentName}"
}
`

exports.sassTemplate = (componentName = "-----") => `
.${componentName}

`

exports.testTemplate = (componentName = "-----") => `
import ${componentName} from './componentName'
describe('it renders successfully', () => {
    let wrapper = shallow(<App/>)
})
`