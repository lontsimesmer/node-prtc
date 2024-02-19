"use strict";
function prefixer(name) {
  return function (message) {
    if (message.includes("Goodbye")) {
      return "Goodbye " + name;
    } else {
      return name + " " + message;
    }
  };
}

const sayHiTo = prefixer("Hello");
const sayByeTo = prefixer("Goodbye");
console.log(sayHiTo("Dave")); // prints 'Hello Dave'
console.log(sayHiTo("Annie")); // prints 'Hello Annie'
console.log(sayByeTo("Dave")); // prints 'Goodbye Dave'
