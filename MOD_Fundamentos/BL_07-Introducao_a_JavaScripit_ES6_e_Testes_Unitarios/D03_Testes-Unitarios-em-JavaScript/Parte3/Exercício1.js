const greetPeople = (people) => {
  let greeting = 'Hello ';
  const out = [];
  for (const person in people) {
   out.push(greeting + people[person]);
  }
  return out;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

const assert = require('assert');
assert.strictEqual(typeof greetPeople,'function');
assert.deepStrictEqual(output, result);
