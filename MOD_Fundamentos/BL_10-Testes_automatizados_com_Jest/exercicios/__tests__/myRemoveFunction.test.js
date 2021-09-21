const myRemove = require('../src/myRemoveFunction');

describe('exercício 2 - 7.3', () => {
  it('A Função recebe os parâmetros: [1, 2, 3, 4] e 3, e deve retornar o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('A Função recebe os parâmetros: [1, 2, 3, 4] e 3, e NÃO deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('A Função não deve alterar o array([1, 2, 3, 4]) passado como parâmetro após ser executada', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('A Função recebe os parâmetros: [1, 2, 3, 4] e 5, e deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});