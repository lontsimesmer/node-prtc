"use strict";
const { Readable, Writable } = require("stream");
const assert = require("assert");

const createWritable = () => {
  const sink = [];
  let piped = false;
  setImmediate(() => {
    assert.strictEqual(piped, true, "use the pipe method");
    assert.deepStrictEqual(sink, ["a", "b", "c"]);
  });

  const writable = new Writable({
    decodeStrings: false,
    write(chunk, enc, cb) {
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

// Create the writable stream
const writable1 = new Writable({
  write(chunk, encoding, callback) {
    // Handle the writable stream data here
    console.log("Received data:", chunk.toString());
    callback();
  },
});

// Create the readable streams
const readable1 = Readable.from(["Hello"]);
const readable2 = Readable.from(["World"]);

const readable = Readable.from(["a", "b", "c"]);
const writable = createWritable();

// Connect the readable stream to the writable stream using pipe
readable.pipe(writable);

// Connect the readable streams to the writable stream using pipe
readable1.pipe(writable1);
readable2.pipe(writable1);
