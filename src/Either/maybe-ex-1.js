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

const map = curry((fn, maybe) => {
  return maybe.map(fn);
})

const getOrElse = curry((defaultValue, maybe) => {
  return maybe.isNothing ? defaultValue : maybe.$value;
});

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Maybe.of, // Just(books)
    map(findBookById(id)), // Just(book)
    map(prop('title')), // Just('book title')
    map(startCase), // Just('Book title')
    getOrElse(`${id} Not Found`)
  )(books);
};

// Coading with javascript
getUpperBookTitleById('book1', books);

// book3 Not Found
getUpperBookTitleById('book3', books);