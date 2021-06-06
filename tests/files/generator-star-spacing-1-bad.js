function * generator() {
  yield 1;
  yield 2;
}

for (const x of generator()) {
  console.log(x);
}
