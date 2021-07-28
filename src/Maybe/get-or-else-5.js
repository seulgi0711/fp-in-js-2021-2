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
    Maybe.of,
    map(findBookById(id)),
    map(prop('title')),
    map(startCase),
    getOrElse(`${id} Not Found`)
  )(books);
};

// Coading with javascript
getUpperBookTitleById('book1', books);

// book3 Not Found
getUpperBookTitleById('book3', books);