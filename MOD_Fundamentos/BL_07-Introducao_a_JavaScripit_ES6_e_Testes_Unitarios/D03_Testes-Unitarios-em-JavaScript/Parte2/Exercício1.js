const assert = require('assert');
const addOne = (array)  => {
  const out = [];
  for (let i in array) {
    if (typeof array[i] !== 'number') {
      throw new Error('Just Numbers')
    }
    out.push(array[i]+1)
  }
  return out
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
