class Example {
  constructor() {
    console.log();
  }

  // no line between one-line class members is OK
  get theAnswer() { return 42; }
  get message() { return 'hi'; }

  // method() is unused but sadly the linter doesn't catch it yet
  method() {
    console.log();
  }
}

console.log((new Example()).theAnswer);
