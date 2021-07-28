class Box {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Box(value);
  }
}

const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const findBookById = curry((id, books) => {
  return books.find((book) => book.id === id);
});

const prop = curry((propName, obj) => {
  return obj[propName];
});

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};