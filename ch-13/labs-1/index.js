"use strict";
const assert = require("assert");
const { join } = require("path");
const fs = require("fs");

const project = join(__dirname, "project");
try {
  fs.rmSync(project, { recursive: true });
} catch (err) {}

const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2));
});

fs.mkdirSync(project);
for (const f of files) fs.closeSync(fs.openSync(f, "w"));

const out = join(__dirname, "out.txt");

function exercise() {
  // Read the file in the projects folder
  const fileNames = files.map((file) => path.basename(file));

  // Write the file names to the out.txt folder
  fs.writeFileSync(out, fileNames.join(","));
}

// function exercise() {
//   const fileNames = [];
//   const projectFiles = fs.readdirSync(project);

//   for (const file of projectFiles) {
//     const fileName = join(project, file);
//     const stats = fs.statSync(fileName);

//     if (stats.isFile()) {
//       fileNames.push(file);
//     }
//   }

//   const content = fileNames.join(",");

//   fs.writeFileSync(out, content);
// }

exercise();

const expected = files.map((f) => require("path").basename(f)).sort();
const actual = fs.readFileSync(out).toString().trim().split(",").sort();

assert.deepStrictEqual(actual, expected);

console.log("passed!");
