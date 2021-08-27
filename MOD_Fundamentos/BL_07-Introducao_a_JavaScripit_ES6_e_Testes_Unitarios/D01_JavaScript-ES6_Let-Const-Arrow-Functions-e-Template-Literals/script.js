          // Parte 1 - Exercicio 1

const testingScope = escopo => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

          // Parte 1 - Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const returnEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens
}



console.log(returnEvens());

          // Parte 2 - Exercicio 1

const fatorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    let result = n;
    for (let i = n-1; i > 0; i -= 1) {
      result = result * i;
    }
    return result;
  }
}

console.log(fatorial(5));

          // Parte 2 - Exercicio 2
const biggerWord = string => {
  const array = string.split(' ');
  let str = array[0];
  for (let i in array) {
    str.length < array[i].length ? str = array[i] : '';
  }
  console.log(str);
}

biggerWord('seu cuca bebe água de hipopotamos');

          // Parte 2 - Exercicio 3

const btn = document.querySelector('button');
const span = document.querySelector('span');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount = clickCount + 1;
  span.innerHTML = clickCount;
})