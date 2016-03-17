#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
var jade = require('jade')

var templatesDir = process.argv[2]
let outputDir = process.argv[3]
var files = fs.readdirSync(templatesDir)

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}
function isJadeTemplate(file) {
  var extension = file.split('.').pop()
  if (extension === 'jade') {
    return true
  }
  return false
}

function getFilename(file) {
  return file.split('.')[0]
}

try {
var buffer = `import jade from './lib/jade'
export default {\n`
let contents, compiledFunction;
for (let file of files) {
  if (!isJadeTemplate(file)) continue

  contents = fs.readFileSync(path.join(templatesDir, file))
  compiledFunction = jade.compileClient(contents)
  buffer += `'${getFilename(file)}': ${compiledFunction},\n\n`
}

buffer += '}'

fs.writeFileSync(path.join(outputDir, 'templates.js'), buffer)
process.exit(0)
} catch (E) {
  console.error(E)
  process.exit(1)
}
