"use strict";
const { promisify } = require("util");

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 125);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 500);
};

const promA = promisify(opA);
const promB = promisify(opB);
const promC = promisify(opC);

async function run() {
  await promA().then((data) => console.log(data));
  await promB().then((data) => console.log(data));
  await promC().then((data) => console.log(data));
}

run().catch((err) => print(err));

const print = (err, contents) => {
  if (err) console.log(err);
  else console.log(contents);
};
