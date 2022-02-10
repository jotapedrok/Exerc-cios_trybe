function exercise_one(num1, num2, num3) {
  const count = (num1 + num2) * num3;
  const result = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return reject(new Error('Informe apenas números'))
    }
    if (count < 50) {
      return reject(new Error('Valor muito baixo'))
    }
    resolve(count)
  });
  return result;
};

module.exports = exercise_one;