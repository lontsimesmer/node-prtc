"use strict";
const assert = require("assert");
const invalidUrl = "not a valid url";
const result = parseUrl(invalidUrl);
console.log(result);

function parseUrl(str) {
  try {
    const parsed = new URL(str);
    return parsed;
  } catch (error) {
    return null;
  }
}

assert.doesNotThrow((_error) => {
  parseUrl("invalid-url");
});
assert.equal(parseUrl("invalid-url"), null);
assert.deepEqual(parseUrl("http://example.com"), new URL("http://example.com"));
console.log("passed!");
