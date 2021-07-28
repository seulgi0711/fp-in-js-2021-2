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