"use strict";
const { promisify } = require("util");
const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

const promisifiedOpA = promisify(opA);
const promisifiedOpB = promisify(opB);
const promisifiedOpC = promisify(opC);

// Method 1 with promisify function

promisifiedOpA()
  .then((resultA) => {
    print(null, `[ ${resultA} ]`);
    return promisifiedOpB();
  })
  .then((resultB) => {
    print(null, `[ ${resultB} ]`);
    return promisifiedOpC();
  })
  .then((resultC) => {
    print(null, `[ ${resultC} ]`);
  })
  .catch((error) => {
    print(error);
  });

// Method 2 with async function

// async function run() {
//   await promA().then((data) => console.log(data));
//   await promB().then((data) => console.log(data));
//   await promC().then((data) => console.log(data));
// }

// run().catch((err) => print(err));

// const print = (err, contents) => {
//   if (err) console.log(err);
//   else console.log(contents);
// };
