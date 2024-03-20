"use strict";
const assert = require("assert");
const { join, basename } = require("path");
const fs = require("fs");
const project = join(__dirname, "project");
try {
  fs.rmdirSync(project, { recursive: true });
} catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2));
});
files.sort();
fs.mkdirSync(project);
for (const f of files) fs.closeSync(fs.openSync(f, "w"));

const out = join(project, "out.txt"); // Update the out variable to include the project folder path

function exercise() {
  const folderPath = project; // Folder path should be project
  const outputPath = "out.txt"; // Output path should be "out.txt"
  const outputFilePath = join(folderPath, outputPath);
  const writeStream = fs.createWriteStream(outputFilePath);

  // const fileContent = files.map((f) => basename(f)).join(";"); // Generate content by joining the basenames of files

  // Read the files in the project folder and write them to the out.txt file
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    writeStream.write(content);
  }

  writeStream.end();
  console.log("Files have been written to", outputFilePath);
}

exercise();

assert.deepStrictEqual(
  fs
    .readFileSync(out)
    .toString()
    .split(";")
    .map((s) => s.trim()),
  files.map((f) => basename(f))
);
console.log("passed!");

// "use strict";
// const assert = require("assert");
// const { join, basename } = require("path");
// const fs = require("fs");
// const project = join(__dirname, "project");
// try {
//   fs.rmdirSync(project, { recursive: true });
// } catch (err) {}
// const files = Array.from(Array(5), () => {
//   return join(project, Math.random().toString(36).slice(2));
// });
// files.sort();
// fs.mkdirSync(project);
// for (const f of files) fs.closeSync(fs.openSync(f, "w"));

// const out = join(__dirname, "out.txt");

// function exercise() {
//   // TODO read the files in the project folder
//   // and write them to the out.txt file
// }

// exercise();
// assert.deepStrictEqual(
//   fs
//     .readFileSync(out)
//     .toString()
//     .split(";")
//     .map((s) => s.trim()),
//   files.map((f) => basename(f))
// );
// console.log("passed!");
