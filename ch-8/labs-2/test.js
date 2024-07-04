const { promisify } = require('util');
const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};
const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};
const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};
const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

// Convert the callback-based functions to promise-based functions
const promiseOpA = promisify(opA);
const promiseOpB = promisify(opB);
const promiseOpC = promisify(opC);

// Call the functions in the desired order using promises
async function runSerialOperations() {
  try {
    const resultA = await promiseOpA();
    print(null, `[${resultA}]`);
    const resultB = await promiseOpB();
    print(null, `[${resultB}]`);
    const resultC = await promiseOpC();
    print(null, `[${resultC}]`);
  } catch (error) {
    print(error);
  }
}

runSerialOperations();
