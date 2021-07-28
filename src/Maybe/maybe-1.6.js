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

const prop = curry((propName, obj) => {
  return obj[propName];
});

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Maybe.of, // Just(books)
    map(findBookById(id)),
    map(prop('title')),
    map(startCase),
  )(books);
};

getUpperBookTitleById('book3', books);