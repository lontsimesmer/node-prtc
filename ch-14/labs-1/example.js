// Operating system names validation

const osNames = [
  'Windows',
  'Linux',
  'macOS',
  'sunOS',
  'FreeBSD',
  'AIX',
  'GNU/Linux',
]
const regex = /^(e|d|w|l|aix|.+bsd|sunos|macos|gnu|js)/i

for (const osName of osNames) {
  if (regex.test(osName)) {
    console.log(`${osName} matches the regex pattern.`)
  } else {
    console.log(`${osName} does not matches the regex pattern.`)
  }
}

// File names filtering in a directory

const fs = require('fs')
const path = require('path')

// const directory = process.cwd()
// console.log(directory);

const directory = '/Users/HP/OneDrive/Documents/node-practice/ch-14/labs-1'

if (fs.existsSync(directory) && fs.statSync(directory).isDirectory()) {
  const files = fs.readdirSync(directory)
  console.log(files)

  for (const filename of files) {
    if (regex.test(filename)) {
      console.log(`${filename} matches the regex pattern.`)
    }
  }
} else {
  console.log(`Error: "${directory}" is not a valid directory.`)
}

// Information extraction from log files

// const regexp = /OS: (Windows|Linux|macOs|sunOs|FreeBSD|AIX)/gi;
const logContent = `
2024-06-13 11:51:00 - OS: Windows
2024-06-13 11:51:01 - OS: Linux
2024-06-13 11:51:02 - OS: macOs
2024-06-13 11:51:03 - OS: sunOs
2024-06-13 11:51:04 - OS: FreeBSD
2024-06-13 11:51:05 - OS: AIX
`

const lines = logContent.trim().split('\n')
const regexp = /OS:\s*(\w+)/i

for (const line of lines) {
  const parts = line.match(regexp)
  if (parts) {
    console.log(`Operating system detected: ${parts[1]}`)
  }
}
// const matches = logContent.match(regexp);

// if (matches) {
//   for (let i = 0; i < matches.length; i++) {
//     console.log(`Operating system detected: ${matches[i].replace("OS: ", "")}`);
//   }
// } else {
//   console.log(`No operating system detected in the log content.`);
// }
