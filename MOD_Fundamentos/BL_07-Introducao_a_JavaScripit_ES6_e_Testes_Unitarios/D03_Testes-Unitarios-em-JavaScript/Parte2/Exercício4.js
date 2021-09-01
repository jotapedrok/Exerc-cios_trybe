const assert = require('assert');
const findTheNeedle = (array, target) => {
  let i = -1;
  for (let key = 0; key < array.length; key += 1) {
    if (typeof array[key] !== 'string') {
      throw new TypeError('array must be strings');
    }
    if (array[key] === target) {
     i = parseInt(key);
    }
  };
  return i
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
