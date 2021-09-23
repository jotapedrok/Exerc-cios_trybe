const {
  uppercase,
  getUserName,
} = require('../src/exercicios');

describe('Testes da função uppercase', () => {
  it('Testa se o retorno da função é a string passada como parâmetro em letras maiúsculas', (done) => {
    const callback = (data) => {
      try {
        expect(data).toBe('BANANA');
        done();
      } catch (e) {
        done(e);
      }
    }
    uppercase('banana', callback)
  });
});

describe('Testes da função "getUserName"', () => {
  it('Deve retornar o nome do funcionário referênte ao ID passado como parâmetro', async () => {
   expect(await getUserName(1)).toBe('Mark');
  });
  it('Deve retornar um erro informando que não existe um funcionário com o ID referido', async () => {
    expect.assertions(1);
    try {
      await getUserName(4);
    } catch (e) {
      expect(e.message).toBe('User with 4 not found.');
    }
  });
});