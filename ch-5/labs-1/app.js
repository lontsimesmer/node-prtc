"use strict";
function prefixer(name) {
  return function (message) {
    if (message.includes("Hello")) {
      return "Hello" + name;
    } else {
      return "Goodbye" + name;
    }
  };
}

const sayHiTo = prefixer("Hello");
const sayByeTo = prefixer("Goodbye");
console.log(sayHiTo("Dave")); // prints 'Hello Dave'
console.log(sayHiTo("Annie")); // prints 'Hello Annie'
console.log(sayByeTo("Dave")); // prints 'Goodbye Dave'
