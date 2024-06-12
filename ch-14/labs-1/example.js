// Operating system names validation

const osNames = [
  "Windows",
  "Linux",
  "MacOS",
  "sunOS",
  "FreeBSD",
  "AIX",
  "GNU/Linux",
];
const regex = /^(e|d|w|l|aix|.+bsd|sunos|macos|gnu|js)/i;

for (const osName of osNames) {
  if (regex.test(osName)) {
    console.log(`${osName} matches the regex pattern.`);
  } else {
    console.log(`${osName} does not matches the regex pattern.`);
  }
}

// File names filtering in a directory

const fs = require("fs");
const path = require("path");

// const directory = process.cwd()
// console.log(directory);

const directory = "/Users/HP/OneDrive/Documents/node-practice/ch-14/labs-1";

if (fs.existsSync(directory) && fs.statSync(directory).isDirectory()) {
  const files = fs.readdirSync(directory);
  console.log(files);

  for (const filename of files) {
    if (regex.test(filename)) {
      console.log(`${filename} matches the regex pattern.`);
    }
  }
} else {
  console.log(`Error: "${directory}" is not a valid directory.`);
}
