const { Readable, Writable, pipeline, Transform } = require("stream");

// Custom transform stream to double the numbers in the input
class DoubleTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const transformedChunk = chunk * 2;
    const buffer = Buffer.from(JSON.stringify(transformedChunk));
    this.push(buffer);
    callback();
  }
}

// Create a reable stream
const readable = Readable.from([1, 2, 3, 4, 5]);

// Create a writable stream
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log("Received transformed data:", chunk.toString());
    callback();
  },
});

// Create an instance of the custom transform stream
const doubleTransform = new DoubleTransform();

// Build the pipeline
pipeline(readable, doubleTransform, writable, (err) => {
  if (err) {
    console.log("Pipeline failed:", err);
  } else {
    console.log("Pipeline completed successfully!");
  }
});
