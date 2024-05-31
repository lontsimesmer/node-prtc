const assert = require("assert");

const leopard = {
  hiss() {
    return "Felix the cat: hsss";
  },
};

const lynx = Object.create(leopard, {
  purr: {
    value: function () {
      return "Felix the cat: prrr";
    },
  },
});

const cat = Object.create(lynx, {
  meow: {
    value: function () {
      return "Felix the cat: meow";
    },
  },
});

const felix = Object.create(cat);

felix.meow(); // prints Felix the cat: meow
felix.purr(); // prints Felix the cat: prrr
felix.hiss(); // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix);
const felixDiProto = Object.getPrototypeOf(felixProto);
const felixTriProto = Object.getPrototypeOf(felixDiProto);

assert(Object.getOwnPropertyNames(felixProto).length === 1);
assert(Object.getOwnPropertyNames(felixDiProto).length === 1);
assert(Object.getOwnPropertyNames(felixTriProto).length === 1);
assert(typeof felixProto.meow === "function");
assert(typeof felixDiProto.purr === "function");
assert(typeof felixTriProto.hiss === "function");

console.log("prototype checks passed!");
