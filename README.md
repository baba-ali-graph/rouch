# Rouch (Touch for React Components)
Rouch is a simple library that generates React components in folders along with (optional) styles and test script template. Rouch provides a CLI that is very easy to use.

## Status
Under development

## Installation

```bash
npm install rouch -g
```

## Usage
Say, we want to create a component `Dashboard` in the folder `src/components` while our current working directory is `src/containers`, we simply call:

```js
rouch ../containers Dashboard --style=css --test 
```
This would generate the following files in the folder `src/components/Dashboard`:

```
/Dashboard
    Dashboard.js
    package.json
    Dashboard.test.js
    dashboard.css
```

Generally, the syntax is:

```
rouch [options] <path> <componentName> 
```

## ARGUMENTS

Rouch takes only two  important arguments:

- `path`: The path to generate the component 
- `componentName`: The name of the component (which is used to create the individual files).
  
## OPTIONS

`-s=value --style=value` : This option specifies the extension of the style file that would be generated. It could be  `css`, `sass`,`scss`, `less` or `stylus`

`-t --test`: If supplied, a template file for possible test scripts would be generated too.

`-o --overwrite`: If supplied, this option would make `rouch` ovewrite an existing directory.

## CONTRIBUTION
If you have any cool ideas, I'm game.

## LICENSE
Copyright (MIT)
