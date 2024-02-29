"use strict";
const { Readable, Writable } = require("stream");
const assert = require("assert");
const net = require("net");
const socket = net.connect(3000);

socket.pipe(process.stdout);

socket.write("Hello");
setTimeout(() => {
  socket.write("all done");
  setTimeout(() => {
    socket.end();
  }, 250);
}, 3250);

const createWritable = () => {
  const sink = [];
  let piped = false;
  setImmediate(() => {
    assert.strictEqual(piped, true, "use the pipe method");
    assert.deepStrictEqual(sink, ["a", "b", "c"]);
  });
  const writable = new Writable({
    decodeStrings: false,
    write(chunk, _enc, cb) {
      sink.push(chunk);
      cb();
    },
    final() {
      console.log("passed!");
    },
  });
  writable.once("pipe", () => {
    piped = true;
  });
  return writable;
};
const readable = Readable.from(["a", "b", "c"]);
const writable = createWritable();

// TODO - send all data from readable to writable:

readable.pipe(writable);
