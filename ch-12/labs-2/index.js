"use strict";
const { Readable, Writable, Transform, pipeline } = require("stream");
const assert = require("assert");

const createWritable = () => {
  const sink = [];
  const writable = new Writable({
    write(chunk, _enc, cb) {
      sink.push(chunk.toString());
      cb();
    },
  });
  writable.sink = sink;
  return writable;
};

const readable = Readable.from(["a", "b", "c"]);
const writable = createWritable();

// Replace the PassThrough stream with a Transform stream that uppercases incoming chunks
const transform = new Transform({
  transform(chunk, _enc, cb) {
    const uppercasedChunk = chunk.toString().toUpperCase();
    this.push(uppercasedChunk);
    cb();
  },
});

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err);
  assert.deepStrictEqual(writable.sink, ["A", "B", "C"]);
  console.log("passed!");
});
