const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel' },
];

const findBookById = curry((id, books) => {
  return books.find((book) => book.id === id);
});

export const validateBookAuthor = (book) => {
  return book.author.indexOf('Chris') > -1 ? Maybe.of(book) : Maybe.of(null);
}

const logBookAuthor = (bookId, books)  => {
  return pipe(
    
  )(books);
}