"use strict";
const assert = require("assert");

function parseUrl(str) {
  try {
    const parsed = new URL(str);
    return parsed;
  } catch (error) {
    return null;
  }
}

function doTask(amount) {
  if (typeof amount !== number) throw new Error("amount must be a number");
  else return amount / 2;
}
doTask(-1);

assert.doesNotThrow((error) => {
  parseUrl("invalid-url");
});
assert.equal(parseUrl("invalid-url"), null);
assert.deepEqual(parseUrl("http://example.com"), new URL("http://example.com"));
console.log("passed!");
