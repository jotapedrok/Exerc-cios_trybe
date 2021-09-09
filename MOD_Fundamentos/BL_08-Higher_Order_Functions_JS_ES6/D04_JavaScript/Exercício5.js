const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let count = 0;
  const x = names.reduce((acc, curr) => acc + curr);
  x.split('').forEach((element) => element === 'a' || element === 'A' ? count += 1 : count);
  return count;
}

containsA();

assert.deepStrictEqual(containsA(), 20);