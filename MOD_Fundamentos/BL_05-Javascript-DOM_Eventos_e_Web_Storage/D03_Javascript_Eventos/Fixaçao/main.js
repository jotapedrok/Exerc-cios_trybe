const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
*/
function techClass (elemento) {
    let temTech = document.querySelector('.tech');
    temTech.classList.remove('tech');
    elemento.target.classList.add('tech');
    input.value = '';
}

firstLi.addEventListener('click', techClass);
secondLi.addEventListener('click', techClass);
thirdLi.addEventListener('click', techClass);

/*
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
function changeText(eventCT) {
    let tgt = document.querySelector('.tech');
    tgt.innerHTML = input.value;
};
input.addEventListener('input', changeText);

 /*Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?*/

function changePg (eventCP) {
    window.location.replace('https://jotapedrok.github.io/');
}

myWebpage.addEventListener('dblclick', changePg);

/*
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/

function changeColor (eventCC) {
    myWebpage.style.color = 'black';
};
function backColor (eventBC) {
    myWebpage.style.color = 'unset'
};

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', backColor);

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.