const sum = require('../src/sumFunction');

describe('exercício 1 - 7.3', () => {
  it('A Função recebe os parâmetros 4 e 5 e o retorno desejado é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('A Função recebe os parâmetros 0 e 0 e o retorno desejado é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('exercício 1 - 7.3 - Erros', () => {
  it('A Função lança um erro caso um dos parâmetro não seja do tipo "number"', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  it('A Função lança o erro "parameters must be numbers" caso um dos parâmetro não seja do tipo "number"', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
  });
})