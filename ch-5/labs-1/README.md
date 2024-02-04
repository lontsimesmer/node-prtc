## Closure Scope

In the labs-1 folder an `app.js` file contains the following:

```
'use strict'
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'
```

Implement the `prefixer` function.

When ready, open a terminal, navigate to the labs-1 folder and run your program with:

`node app.js`

This program will not run correctly until the implementation is complete.

When successfully implemented the output should be as follows:

```
Hello Dave
Hello Annie
Goodbye Dave
```
