const exercise_one = require('./exercise_one');
const main = () => {
  const randomNum = () => Math.floor(Math.random() * 100 + 1);
  exercise_one(randomNum(), randomNum(), randomNum())
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
}

main();

module.exports = main();