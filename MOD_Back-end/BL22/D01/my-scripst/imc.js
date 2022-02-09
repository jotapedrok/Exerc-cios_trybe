const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura?');

const imc = (peso / Math.pow(altura, 2));
const verdadeiro = true;

switch (verdadeiro) {
  case imc < 18.5:
    console.log('Eita... Você está a baixo do peso!');
    break;
  case imc >= 18.5 && imc <= 24.9:
    console.log('Está no seu peso normal.');
    break;
  case imc >= 25.0 && imc <= 29.9:
    console.log('Cuidado... Você está acima do peso.');
    break;
  case imc >= 30.0 && imc <= 34.9:
    console.log('Você está em Obesidade Grau 1.');
    break;
  case imc >= 35.0 && imc <= 39.9:
    console.log('Você está em Obesidade Grau 2.');
  break;
  case imc >= 40.0:
    console.log('Você está em Obesidade Grau 3. Isto é preocupante!');
  break;
  default:
    console.log('algo de errado não está certo!');
}