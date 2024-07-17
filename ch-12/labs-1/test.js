'use strict';
const { Readable, Writable } = require('stream');
const assert = require('assert');

// Create the writable stream
const writable = new Writable({
  write(chunk, _encoding, callback) {
    // Handle the writable stream data here
    console.log('Received data:', chunk.toString());
    callback();
  },
});

// Create the readable streams
const readable1 = Readable.from(['Hello']);
const readable2 = Readable.from(['World']);

// Connect the readable streams to the writable stream using pipe
readable1.pipe(writable);
readable2.pipe(writable);

// Create a combined readable stream
const combinedReadable = Readable.from(['Hello World']);

// Read the data from the combined readable stream and log "Hello World"
combinedReadable.on('data', (chunk) => {
  console.log(chunk.toString());
});
