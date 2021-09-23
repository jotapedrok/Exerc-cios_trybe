const searchEmployee = require('../src/searchEmployee');

describe('Testes da função "searchEmployee"', () => {
  it('Testa se a função "searcheEmployee" é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('A Função searchEmployee(id, "firstName") deve retornar o primeiro nome do usuário referente ao id dado como parâmetro', () => {
    expect(searchEmployee('4456-4', "firstName")).toBe('Leila');
  });
  it('A Função searchEmployee(id, "lastName") deve retornar o sobrenome do usuário referente ao id dado como parâmetro', () => {
    expect(searchEmployee('4456-4', "lastName")).toBe('Zuckerberg');
  });
  it('A Função searchEmployee(id, "specialities") deve retornar um array com as especialidades do usuário referente ao id dado como parâmetro', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
});

describe('Teste de erros da função "searchEmployee"', () => {
  it('Verifica se é lançado um erro quando os parâmetros não são definidos', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Verifica se é mensagem de erro é "Id não definido"', () => {
    expect(() => { searchEmployee() }).toThrowError(new Error('Id não definido'));
  });
  it('Verifica se é lançado um erro quando o id não é encontrado no banco de dados', () => {
    expect(() => { searchEmployee('12345', "firstName") }).toThrow();
  });
  it('Verifica se é mensagem de erro é "ID não identificada"', () => {
    expect(() => { searchEmployee('12345', "firstName") }).toThrowError(new Error('ID não identificada'));
  });
  it('verifica se é lançado um erro quando o "detail" não está disponível', () => {
    expect(() => { searchEmployee('8579-6', "favoriteFood") }).toThrow();
  });
  it('Verifica se é mensagem de erro é "Indisponível"', () => {
    expect(() => { searchEmployee('8579-6', "favoriteFood") }).toThrowError(new Error('Indisponível'));
  });
});