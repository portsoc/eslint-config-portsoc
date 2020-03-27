// inside an async function, we should await
async function foo() {
  await console.log();
}

console.log(foo);
