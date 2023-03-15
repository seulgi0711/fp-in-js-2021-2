const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel' },
];

const findBookById = curry((id, books) => {
  return Maybe.of(books.find((book) => book.id === id));
});

export const validateBookAuthor = (book) => {
  return book.author.indexOf('Chris') > -1 
    ? Either.right(book) 
    : Either.left(book);
}

const either = curry((left, right, either) => {
  return either.isLeft ? left(either.$value) : right(either.$value);
});

const logValidBookAuthor = (book) => {
  console.log(book.author);
};

const logErrorBookAuthor = (book) => {
  console.error(book.author);
};

const logBookAuthor = (bookId, books)  => {
  return pipe(
    findBookById(bookId), // Maybe(Book)
    validateBookAuthor,
    either(logErrorBookAuthor, logValidBookAuthor)
  )(books);
}
