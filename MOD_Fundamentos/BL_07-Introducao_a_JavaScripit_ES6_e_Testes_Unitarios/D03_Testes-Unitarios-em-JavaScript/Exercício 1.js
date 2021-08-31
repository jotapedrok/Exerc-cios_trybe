const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(2, 5), 7, "is'nt equal");
assert.strictEqual(sum(5, 5), 10, "is'nt equal");
assert.strictEqual(sum(12, 5), 17, "is'nt equal");
assert.throws(() => {sum('2', 4)});
