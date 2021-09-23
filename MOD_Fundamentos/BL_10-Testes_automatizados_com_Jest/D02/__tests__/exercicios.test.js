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