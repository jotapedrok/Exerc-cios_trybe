const { obj1, obj2, obj3 } = require('../src/objectsCompare');

describe('exercício 5 - 7.3', () => {
  it('Comparando "obj1" e "obj2" e eles devem ser identicos', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Comparando "obj1" e "obj3" e eles devem ser diferentes', () => {
    expect(obj1).not.toEqual(obj3);
  });
});