const readline = require('readline-sync');

module.exports = function velocidade() {
  const distancia = readline.questionInt('Qual a distância?(em metros)');
  const tempo = readline.questionInt('Quanto tempo será necessário para percorrer essa distância?(em segundos)');
  
  const vm = (distancia / tempo);
  
  console.log(`A velocidade média, com esses dados, é de ${vm} m/s`)
}