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

// Right('Right Value')
const right = new Right('Right Value');