const n = 99;
function f(n = 99) {
  debugger; // Add this line to pause execution
  if (n === 0) throw Error();
  f(n - 1);
}
f();
