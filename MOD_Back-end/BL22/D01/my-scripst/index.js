const readline = require('readline-sync');
const sorteio = require('./sorteio');
const imc = require('./imc');
const velocidade = require('./velocidade');

let repeat = true;

const main = () => {
  console.log(
    '1 - sorteio \n2 - imc \n3 - velocidade \n0 - sair'
  )
  
  const chooseAScript = readline.questionInt('Escolha um script pelo número: ');
  
  switch (chooseAScript) {
    case 1:
      sorteio();
      repeat = false;
      break;
    case 2:
      imc();
      repeat = false;
      break;
    case 3:
      velocidade();
      repeat = false;
      break;
    case 0:
      repeat = false;
      break
    default:
      console.log('\nEscolha um numer válido!\n');
      repeat = true;
  }
}

while(repeat) {
  main();
}
