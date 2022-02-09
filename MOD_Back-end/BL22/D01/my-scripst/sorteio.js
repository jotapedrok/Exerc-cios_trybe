const readline = require('readline-sync');

module.exports = function sorteio() {
  let playAgain = 'y';
  
  const main = () => {
    const numb = readline.questionInt('Choose a inteir number between 1 e 10 ');
    const numb2 = readline.questionInt('Choose another inteir number between 1 e 10 ');
    
    const random = Math.floor((Math.random() * 10)) + 1;
    
    if (numb === random || numb2 === random) {
      console.log(`Congrats! You Win! The right number is ${random}`)
    } else {
      console.log(`Sorry... You Lose! The right number is ${random}`);
    }
    
    playAgain = readline.question('Do you wanna play again?(Y/n) ', {defaultInput: 'y'});
  }
  
  
  while (playAgain.toUpperCase() === 'Y') {
    main();
  }
} 

