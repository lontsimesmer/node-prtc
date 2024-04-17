"use strict";

const assert = require("assert");
const { EventEmitter } = require("events");
const ee = new EventEmitter();
let count = 0;

setInterval(() => {
  ee.emit("tick");
}, 100);

function listener() {
  count++;
  setTimeout(() => {
    assert.equal(count, 1);
    assert.equal(this, ee);
    console.log("passed!");
  }, 250);
}

function listener1() {
  console.log("listener 1 called");
}

ee.once("tick", listener);
ee.once("tick", listener1);

// ee.on("my-event", () => {
//   console.log("my-event fired");
// });
// ee.emit("my-event");
// ee.emit("my-event");
// ee.emit("my-event");
