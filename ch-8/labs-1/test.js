const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

// Method 4: using Promises

const opA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("A");
    }, 500);
  });
};

const opB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("B");
    }, 250);
  });
};

const opC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("C");
    }, 125);
  });
};

// Call the function in the desired order using async/await

(async () => {
  try {
    const resultC = await opC();
    print(null, `[ ${resultC} ]`);
    const resultB = await opB();
    print(null, `[ ${resultB} ]`);
    const resultA = await opA();
    print(null, `[ ${resultA} ]`);
  } catch (error) {
    print(error);
  }
})();
