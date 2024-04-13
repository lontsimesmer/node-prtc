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

// Method 1 with promisify function

// const promA = promisify(opA);
// const promB = promisify(opB);
// const promC = promisify(opC);

// async function run() {
//   await promA().then((data) => console.log(`[ ${data} ]`));
//   await promB().then((data) => console.log(`[ ${data} ]`));
//   await promC().then((data) => console.log(`[ ${data} ]`));
// }

// run().catch((err) => print(err));

// // Another way of method 1

// const promisifiedOpA = promisify(opA);
// const promisifiedOpB = promisify(opB);
// const promisifiedOpC = promisify(opC);

// promisifiedOpA()
//   .then((resultA) => {
//     print(null, `[ ${resultA} ]`);
//     return promisifiedOpB();
//   })
//   .then((resultB) => {
//     print(null, `[ ${resultB} ]`);
//     return promisifiedOpC();
//   })
//   .then((resultC) => {
//     print(null, `[ ${resultC} ]`);
//   })
//   .catch((error) => {
//     print(error);
//   });

// Method 2 using callback functions (recursion)

opA((err, resultA) => {
  if (err) {
    print(err);
    return;
  }
  print(null, `[ ${resultA} ]`);
  opB((err, resultB) => {
    if (err) {
      print(err);
      return;
    }
    print(null, `[ ${resultB} ]`);
    opC((err, resultC) => {
      if (err) {
        print(err);
        return;
      }
      print(null, `[ ${resultC} ]`);
    });
  });
});
