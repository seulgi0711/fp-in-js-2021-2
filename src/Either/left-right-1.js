const concat = curry((str1, str2) => {
  return `${str1}${str2}`;
});

const map = curry((fn, maybe) => {
  return maybe.map(fn);
});