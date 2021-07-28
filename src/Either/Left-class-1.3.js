class Left extends Either {
  get isRight() {
    return false;
  }

  get isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

// Left('Start')
Either.left('Star').map(concat('Super'));