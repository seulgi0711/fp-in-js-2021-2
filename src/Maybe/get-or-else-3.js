const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

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

getUpperBookTitleById('book1', books);