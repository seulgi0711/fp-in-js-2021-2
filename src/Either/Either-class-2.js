class Either {
  constructor(value){
    this.$value = value;
  }

  static right(value) {
    return new Right(value);
  }

  static left(value) {
    return new Left(value);
  }
}

// Left('Left Value')
const left = Either.left('Left Value');

// Right('Right Value')
const right = Either.right('Right Value');