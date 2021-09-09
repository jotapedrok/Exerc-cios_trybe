const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let x = arrays.reduce((sum, element) => sum.concat(element))
  return x;
}

flatten();

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);