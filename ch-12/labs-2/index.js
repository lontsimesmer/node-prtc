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

// Custom transform stream to uppercase incoming chunks
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const uppercasedChunk = chunk.toString().toUpperCase();
    this.push(uppercasedChunk);
    callback();
  }
}

const transform = new UppercaseTransform();

// Replace the PassThrough stream with a Transform stream that uppercases the incoming chunks

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err);
  assert.deepStrictEqual(writable.sink, ["A", "B", "C"]);
  console.log("passed!");
});
