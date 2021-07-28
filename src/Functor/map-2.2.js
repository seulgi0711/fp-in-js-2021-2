class Box {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Box(value);
  }

  map(fn) {
    return new Box(fn(this.$value));
  }
}

const addFive = (num) => {
  return num + 5;
}

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Box(11)
Box.of(1)
  .map(addFive)
  .map(addFive)

// Box('Hello, FP')
Box.of('hello, FP')
  .map(startCase)