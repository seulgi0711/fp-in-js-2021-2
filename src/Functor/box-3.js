class Box {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Box(value);
  }
}

const box1 = new Box('FP'); // Box('FP');
const box2 = Box.of('FP2'); // Box('FP2');
const box3 = Box.of(Box.of('FP3')); // Box(Box('FP3'));