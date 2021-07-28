const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Maybe.of,
    map(findBookById(id)),
    map(prop('title')),
    map(startCase),
  )(books);
};

// Just('Coading with javascript')
getUpperBookTitleById('book1', books);