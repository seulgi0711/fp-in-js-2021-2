const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel' },
];

const findBookById = curry((id, books) => {
  return books.find((book) => book.id === id);
});

export const validateBookAuthor = (book) => {
  return book.author.indexOf('Chris') > -1 
    ? Either.right(book) 
    : Either.left(book);
}

const logByEitherStatus = (eitherChrisBook) => {
};

const logBookAuthor = (bookId, books)  => {
  return pipe(
    findBookById(bookId), // Book
    validateBookAuthor, // Right(Book) or Left(Book)
    logByEitherStatus
  )(books);
}
