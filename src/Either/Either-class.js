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