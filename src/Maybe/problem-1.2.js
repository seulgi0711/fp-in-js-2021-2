const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const prop = curry((propName, obj) => {
  return obj[propName];
});

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Box.of,
    map(findBookById(id)),
    map(prop('title')),
    map(startCase),
  )(books);
};

// Cannot read property 'title' of undefined
getUpperBookTitleById('book3', books);