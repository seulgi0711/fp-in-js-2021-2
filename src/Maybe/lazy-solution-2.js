const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const prop = curry((propName, obj) => {
  return obj && obj[propName];
});

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Box.of, // Box(books)
    map(findBookById(id)), // Box(undefined)
    map(prop('title')), // Box(undefined)
    map(startCase), // Cannot read property 'charAt' of undefined
  )(books);
};

// Cannot read property 'charAt' of undefined
getUpperBookTitleById('book3', books);