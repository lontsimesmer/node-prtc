const { Readable, Writable, pipeline, Transform } = require("stream");

// Custom transform stream to double the numbers in the input
class DoubleTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunks, encoding, callback) {
    const transformedChunks = chunks.map((num) => num * 2);
    this.push(transformedChunks);
    callback();
  }
}

// Create a reable stream
const readable = Readable.from([[1, 2, 3, 4, 5]]);

// Create a writable stream
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log("Received transformed data:", chunk);
    callback();
  },
});

// Create an instance of the custom transform stream
const doubleTransform = new DoubleTransform();
