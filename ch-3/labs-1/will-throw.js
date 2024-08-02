// function f(n = 99) {
//   if (n === 0) throw Error();
//   f(n - 1);
// }
// f();

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// Output = 55
