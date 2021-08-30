// Exercícíos Parte 1
/*const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const newOrder = Object.assign({}, order);
newOrder.name = 'Luiz Silva';
newOrder.payment.total = 50;


//Exercicio 1
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const send = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;
  return send;
}

customerInfo(order);

//Exercicio 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const send2 = `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`;
  console.log(send2);
}

orderModifier(newOrder); */

//Exercícíos Parte 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1
const changeShift = (objeto, key, value) => {
  objeto[key] = value;
}
changeShift(lesson2, 'turno', 'manhã');

//Exercicio 2
const keyList = (objeto) => {
  for (let i = 0; i < Object.keys(objeto).length; i += 1){
    console.log(`${Object.keys(objeto)[i]}`);
  }
  
}
keyList(lesson3);

//Exercicio 3
const objectSize = (objeto) => Object.keys(objeto).length;
console.log(objectSize(lesson3));

//Exercicio 4
const valueList = (objeto) => {
  for (let i = 0; i < Object.values(objeto).length; i += 1){
    console.log(`${Object.values(objeto)[i]}`);
  }
  
}
valueList(lesson3);

//Exercicio 5
const allLessons = (Object.assign({}, {lesson1, lesson2, lesson3}));
console.log(allLessons);

//Exercicio 6
const allStudents = (objeto) => {
  let allStud = 0;
  const array = Object.keys(objeto);
  for (let i = 0; i < array.length; i += 1) {
    allStud = allStud + objeto[array[i]].numeroEstudantes;
  }
  
  console.log(allStud);
}

allStudents(allLessons);

//Exercicio 7
const getValueByNumber = (objeto, num) => console.log(Object.values(objeto)[num]);

getValueByNumber(lesson2, 2);

//Exercicio 8
const verifyPair = (objeto, key, value) => {
  const arrayArrays = Object.entries(objeto);
  let istrue = false;
  for (let i = 0; i < arrayArrays.length; i += 1) {
    if (arrayArrays[i][0] === key && arrayArrays[i][1] === value) {
      istrue = true;
    }
  }
  return istrue;
}

console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));

//Exercícios Bônus

//Exercício 1
const countMathStudents = (objeto, matéria) => {
  const arrayArrays = Object.entries(objeto);
  let count = 0;
  for (let i = 0; i < arrayArrays.length; i += 1) {
    if (arrayArrays[i][1].materia === matéria) {
      count += arrayArrays[i][1].numeroEstudantes;
    }
  }
  console.log(count);
}
countMathStudents(allLessons, 'Matemática');

//Exercício 2
const createReport = (objeto, professor) => {
  const report = {};
  report.professor = professor;
  report.aulas = []
  report.estudantes = 0
  const arrayArrays = Object.entries(objeto);
  for (let i = 0; i < arrayArrays.length; i += 1)  {
    if (arrayArrays[i][1].professor === professor) {
      report.aulas.push(arrayArrays[i][1].materia);
      report.estudantes += arrayArrays[i][1].numeroEstudantes;
    }
  }
  console.log(report)
}
createReport(allLessons, 'Maria Clara');