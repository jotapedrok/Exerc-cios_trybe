const myFizzBuzz = require('../src/myFizzBuzz');

describe('exercício 4 - 7.3', () => {
  it('A função recebe como parâmetro o número 15 e retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it('A função recebe como parâmetro o número 9 e retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });
  it('A função recebe como parâmetro o número 10 e retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  it('A função recebe como parâmetro o número 8 e retorna 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('A função não recebe um "number" como parâmetro e retorna "false"', () => {
    expect(myFizzBuzz("5")).toBe(false);
  });
});