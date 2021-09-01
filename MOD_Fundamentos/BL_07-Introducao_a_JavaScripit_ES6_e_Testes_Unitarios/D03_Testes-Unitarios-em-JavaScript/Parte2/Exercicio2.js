const assert = require('assert');
const wordLengths = () => {
  const out = [];
  for (let i in words) {
    if (typeof words[i] !== 'string') {
      throw new Error('words must be strings');
    }
    out.push(words[i].length)
  }
  return out
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);