class Maybe {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  map(fn) {
    return new Maybe(fn(this.$value));
  }
}