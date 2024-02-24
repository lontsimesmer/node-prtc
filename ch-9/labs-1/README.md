## Single Use Listener

The labs-1 `index.js` file contains the following code

```
'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')
const ee = new EventEmitter()
let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)
function listener () {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}
```

Register the _listener_ function with the _ee_ event emitter in such a way that the listener function is only called a single time. If implemented correctly, the program should print out `passed!`
