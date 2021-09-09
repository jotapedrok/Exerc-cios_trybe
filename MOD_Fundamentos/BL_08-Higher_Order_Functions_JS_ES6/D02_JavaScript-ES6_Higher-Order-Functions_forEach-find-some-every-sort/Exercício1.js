const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 1
/*const authorBornIn1947 = () => {
  const name = books.find((element) => element.author.birthYear == 1947).author.name
  return name
}



assert.strictEqual(authorBornIn1947(), 'Stephen King');*/

// Exercício 2
/*function smallerName() {
  let nameBook;
  books.forEach((element) => {
    if (nameBook === undefined || nameBook.length > element.name.length) {
      nameBook = element.name
    }
  }) 
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');*/
// Exercício 3
/*const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => books.find(element => element.name.length === 26);

assert.deepStrictEqual(getNamedBook(), expectedResult);*/

//Exercício 4
/*const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const booksOrderedByReleaseYearDesc = () => books.sort((elementA, elementB) => elementB.releaseYear - elementA.releaseYear);

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);*/

//Exercício 5
/*const expectedResult = false;

const everyoneWasBornOnSecXX = () => books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000)

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);*/

//Exercício 6
/*const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);*/

//Exercício 7
const expectedResult = false;

const authorUnique = () => books.forEach((book) => {
  return books.some((element) => element.author.birthYear === book.author.birthYear)
})

assert.strictEqual(authorUnique(), expectedResult);
