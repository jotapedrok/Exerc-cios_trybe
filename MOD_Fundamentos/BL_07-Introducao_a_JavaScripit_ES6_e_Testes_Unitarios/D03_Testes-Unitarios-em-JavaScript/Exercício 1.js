const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, "is'nt equal");
assert.strictEqual(sum(0, 0), 0, "is'nt equal");
assert.throws(() => {sum('4', 5)}, /parameters must be numbers$/);
