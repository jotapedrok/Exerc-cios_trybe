/* Exercícío 1
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const register = (employeName) => {
  const arrayName = employeName.split(' ');
  const email = `${arrayName.join('').toLowerCase()}@emprise.com`;
  return {
    nome: employeName,
    email: email,
  }
}

console.log(newEmployees(register));*/

/*Exercício 2
const raffle = (func, num) => {
  if (func() == num) {
    return 'Parabéns você ganhou'
  } 
  return 'Tente novamente'
}

const raffling = () => {
  const num = Math.ceil(Math.random() *5);
  return num;
}
console.log(raffle(raffling, 4));*/

const correction = (gabarito, respostas, func) => {
  const note = func(gabarito, respostas);
  console.log(note);
}

const check = (correct, answers) => {
  let sum = 0;
  for (let i in correct)
  if (answers[i] === 'N.A') {
    sum += 0;
  } else if (answers[i] === correct[i]) {
    sum += 1
  } else {
    sum += -0.5
  }
  return sum
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

correction(RIGHT_ANSWERS, STUDENT_ANSWERS, check);