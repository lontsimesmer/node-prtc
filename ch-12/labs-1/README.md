## Piping

The labs-1 folder has an `index.js` file containing the following:

```
'use strict'
const { Readable, Writable } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  let piped = false
  setImmediate(() => {
    assert.strictEqual(piped, true, 'use the pipe method')
    assert.deepStrictEqual(sink, ['a', 'b', 'c'])
  })
const writable = new Writable({
  decodeStrings: false,
  write(chunk, enc, cb) {
    sink.push(chunk)
    cb()
  },
  final() {
    console.log('passed!')
  }
})
writable.once('pipe', () => {
  piped = true
})
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()
// TODO - send all data from readable to writable:
```

Use the appropriate method to make sure that all data in the _readable_ stream is automatically
sent to the _writable_ stream.
If successfully implemented the process will output: `passed!`
