"use strict";
const { readFileSync } = require("fs");
const { readFile } = require("fs/promises");
const assert = require("assert");

class FileError extends Error {
  constructor() {
    super();
  }
}

async function read(file) {
  try {
    const content = await readFile(file);
    return content;
  } catch (error) {
    throw new FileError("failed to read");
  }
}

async function check() {
  await assert.rejects(
    read("not-a-valid-filepath"),
    new Error("failed to read")
  );
  assert.deepEqual(await read(__filename), readFileSync(__filename));
  console.log("passed!");
}

check();
