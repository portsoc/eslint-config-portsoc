function f() {}
let x;
// the following line uses the comma operator
while ((x = f(), x < 42)) { /* … */ }
