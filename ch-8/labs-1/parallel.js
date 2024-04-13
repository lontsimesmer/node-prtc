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
