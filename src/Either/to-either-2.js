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

const logByMaybeStatus = (maybeChrisBook) => {
  if (maybeChrisBook.isNothing) {
    // console.error로 책 저자명 출력
    console.error('저자명 몰라요...ㅜㅜ')
  } else {
    console.log(maybeChrisBook.$value.author);
  }
};

const logBookAuthor = (bookId, books)  => {
  return pipe(
    findBookById(bookId), // Book
    validateBookAuthor, // Right(Book) or Left(Book)
    logByMaybeStatus
  )(books);
}
