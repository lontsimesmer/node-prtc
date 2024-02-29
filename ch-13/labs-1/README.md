## Read Directory and Write a File

The labs-1 folder contains an `index.js` file containing the following:

```
'use strict'
const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))
const out = join(__dirname, 'out.txt')
function exercise () {
  // TODO read the files in the project folder
  // and write them to the out.txt file
}
exercise()
assert(fs.readFileSync(out).toString(), files.toString())
console.log('passed!')
```

The above code will generate a project folder and add five files to it with pseudo-randomly
generated filenames.

Complete the function named _exercise_ so that all the files in the _project_ folder, as stored in
the project constant, are written to the `out.txt` file as stored in the out constant. Only the
file names should be stored, not the full file paths, and file names should be comma separated.

For instance, given a _project_ folder with the following files:

● 0p2ly0dluiw
● 2ftl32u5zu5
● 8t4iilscua6
● 90370mamnse
● zfw8w7f8sm8

The `out.txt` should then contain:

`0p2ly0dluiw,2ftl32u5zu5,8t4iilscua6,90370mamnse,zfw8w7f8sm8`

If successfully implemented, the process will output: `passed!`.
