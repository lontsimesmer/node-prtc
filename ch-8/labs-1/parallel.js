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
  return new Promise((resolve) => {
    setTimeout(() => {
      cb(null, 'B');
      resolve('B');
    }, 250);
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

// Method 1 using recursion

opC((errC, resultC) => {
  print(errC, `[ ${resultC} ]`);
  opB((errB, resultB) => {
    print(errB, `[ ${resultB} ]`);
    opA((errA, resultA) => {
      print(errA, `[ ${resultA} ]`);
    });
  });
});

// Method 2 using callback and control flow

opC((err, resultC) => {
  if (err) {
    print(err);
    return;
  }
  print(null, `[ ${resultC} ]`);
  opB((err, resultB) => {
    if (err) {
      print(err);
      return;
    }
    print(null, `[ ${resultB} ]`);
    opA((err, resultA) => {
      if (err) {
        print(err);
        return;
      }
      print(null, `[ ${resultA} ]`);
    });
  });
});

// Method 3 using async Library

const async = require('async');

// Using async.series, call the function in the desired order

async.series([opC, opB, opA], (err, results) => {
  if (err) {
    print(err);
  } else {
    results.forEach((result) => {
      print(null, `[ ${result} ]`);
    });
  }
});
