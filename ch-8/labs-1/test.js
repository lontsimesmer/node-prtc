const async = require('async');

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('B');
    }, 250);
  })
    .then((result) => {
      cb(null, result); // Call the callback function with the result
      return result; // Return the result for the Promise chaining
    })
    .catch((error) => {
      console.error(error);
    });
};

const opC = (cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb(null, 'C');
      resolve('C');
    }, 125);
  });
};

async.waterfall([opC, opB, opA], print);

// const opA = (cb) => {
//   setTimeout(() => {
//     cb(null, 'A');
//   }, 500);
// };

// const opB = (cb) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cb(null, 'B');
//       resolve('B');
//     }, 250);
//   });
// };

// const opC = (cb) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cb(null, 'C');
//       resolve('C');
//     }, 125);
//   });
// };

// // Method 3 using async Library

// const async = require('async');

// // Using async.series, call the function in the desired order

// async.series([opC, opB, opA], (err, results) => {
//   if (err) {
//     print(err);
//   } else {
//     results.forEach((result) => {
//       print(null, `[ ${result} ]`);
//     });
//   }
// });

// // Method 4: using Promises

// const OpA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('A');
//     }, 500);
//   });
// };

// const OpB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('B');
//     }, 250);
//   });
// };

// const OpC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('C');
//     }, 125);
//   });
// };

// // Call the function in the desired order using async/await

// (async () => {
//   try {
//     const resultC = await OpC();
//     print(null, `[ ${resultC} ]`);
//     const resultB = await OpB();
//     print(null, `[ ${resultB} ]`);
//     const resultA = await OpA();
//     print(null, `[ ${resultA} ]`);
//   } catch (error) {
//     print(error);
//   }
// })();
