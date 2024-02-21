## Serial Execution

In the labs-2 folder, the `serial.js` file contains the following:

```
const { promisify } = require('util')
const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}
const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}
const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}
const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}
```

Call the functions in such a way that [ A ] then [ B ] then [ C ] is printed out.

Remember _promisify_ can be used to convert a callback API to a promise-based API.
The _promisify_ function is included at the top of `serial.js` in case a promise based solution
is preferred.
