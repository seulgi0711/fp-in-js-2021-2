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
    Box.of, // Box(books)
    map(findBookById(id)), // Box(undefined)
    map(prop('title')), // Cannot read property 'title' of undefined
    map(startCase),
  )(books);
};

// Cannot read property 'title' of undefined
getUpperBookTitleById('book3', books);