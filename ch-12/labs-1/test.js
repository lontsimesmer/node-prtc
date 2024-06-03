"use strict";
const { Readable, Writable } = require("stream");
// const assert = require("assert");

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

// Connect the readable streams to the writable stream using pipe
readable1.pipe(writable1);
readable2.pipe(writable1);
