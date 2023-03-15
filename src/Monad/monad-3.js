class Either {
  constructor(value){
    this.$value = value;
  }

  static right(value) {
    return new Right(value);
  }

  static left(value) {
    return new Left(value);
  }
}

class Right extends Either {
  get isRight() {
    return true;
  }

  get isLeft() {
    return false;
  }

  map(fn) {
    return new Right(fn(this.$value));
  }
}

class Left extends Either {
  get isRight() {
    return false;
  }

  get isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

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

const getOrElse = curry((defaultValue, maybe) => {
  return maybe.getOrElse(defaultValue);
})

getOrElse(0, Maybe.of(1)) // 1
getOrElse(0, Maybe.of(null)) // 0

const chain = curry((fn, maybe) => {
  return maybe.chain(fn);
});

const logBookAuthor = (bookId, books)  => {
  return pipe(
    findBookById(bookId), // Maybe(Book)
    chain(validateBookAuthor), // Either(Book)
    map(logValidBookAuthor)
  )(books);
}

// Coding with javascript
logBookAuthor('book1', books);