class Right extends Either {
  get isRight() {
    return true;
  }

  get isLeft() {
    return false;
  }

  map(fn) {
    return new Right(fn(this.$value));
  }
}