const assert = require("assert");

function secondThirdSmallest(array) {
  let results = []
  const x = array.sort((a, b) => a - b);
  results = [x[1], x[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);