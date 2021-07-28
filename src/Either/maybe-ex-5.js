class Maybe {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }
}

const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const map = curry((fn, maybe) => {
  return maybe.map(fn);
})

const addFive = (num) => {
  return num + 5;
}

// Just(6)
Maybe.of(1)
  .map(addFive)

map(addFive, Maybe.of(1)) // Just(6)

pipe(
  Maybe.of, // Just(1)
  map(addFive), // Just(6)
  map(addFive) // Just(11)
)(1) // Just(11)