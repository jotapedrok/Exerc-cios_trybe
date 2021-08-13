function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

                    // Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMês() {

    const listDays = document.querySelector('#days')

for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i]
    let dayLi = document.createElement('li');
    dayLi.className = 'day'

    if (day === 24 || day === 31) {
        dayLi.classList.add('holiday');
        dayLi.innerHTML = day;
        listDays.appendChild(dayLi);
    } else if (day === 4 || day === 11 || day === 18) {
        dayLi.classList.add('friday');
        dayLi.innerHTML = day;
        listDays.appendChild(dayLi); 
    } else if ( day === 25) {
        dayLi.classList.add('friday', 'holiday');
        dayLi.innerHTML = day;
        listDays.appendChild(dayLi); 
    } else {
        dayLi.innerHTML = day;
        listDays.appendChild(dayLi);
    }
    
}
}
diasDoMês();

                    // Exercício 2
function botaoFeriado(nomeDoBotao){
    let divButton = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    
button.innerHTML = nomeDoBotao;
button.id = 'btn-holiday';
divButton.appendChild(button);
} 
botaoFeriado('Feriados');

                    // Exercício 3
function corHolidays () {
    let botaoFeriados = document.querySelector('#btn-holiday');
    let diasFeriados = document.querySelectorAll('.holiday');

    function changeColor(eventChC){
        for (let i = 0; i < diasFeriados.length; i += 1) {
            if (diasFeriados[i].style.backgroundColor === 'white') {
                diasFeriados[i].style.backgroundColor = 'unset';
            } else {
                diasFeriados[i].style.backgroundColor = 'white';
            }
        }
    }

    botaoFeriados.addEventListener('click', changeColor);
}
corHolidays();

                    // Exercicio 4
function botaoSexta(nomeDoBotao){
    let divButton = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    
button.innerHTML = nomeDoBotao;
button.id = 'btn-friday';
divButton.appendChild(button);
} 
botaoSexta('Sexta-Feira');

                    //Exercicio 5
function corTextFriday() {
    let botaoFriday = document.querySelector('#btn-friday');
    let diasDeSexta = document.querySelectorAll('.friday');
    let sextasDez = [4, 11, 18, 25]

    function changeTxt(eventChTC){
        for (let i = 0; i < diasDeSexta.length; i += 1) {
            if (diasDeSexta[i].innerText === 'Sextou!!!') {
                diasDeSexta[i].innerText = sextasDez[i];
            } else {
                diasDeSexta[i].innerText = 'Sextou!!!';
            }
        }
    }

    botaoFriday.addEventListener('click', changeTxt);
}
corTextFriday();

                    //Exercicio 6

let days = document.querySelector('#days');
function textZoomIn (event) {
    let tgt = event.target;
    tgt.style.fontSize = '30px';
    tgt.style.fontWeight = '600';
}

days.addEventListener('mouseover', textZoomIn);

function textZoomOut (event) {
    let tgt = event.target;
    tgt.style.fontSize = '20px';
    tgt.style.fontWeight = '200';
}

days.addEventListener('mouseout', textZoomOut);

                    //Exercicio 7
let taskList = document.querySelector('.my-tasks');

function newTask (NameTask) {
    let task = document.createElement('span');
    task.innerText = NameTask;

    taskList.appendChild(task);
}

newTask('Codar');

                    //Exercicio 8
function colorTask (cor) {
    let color = document.createElement('div');
    color.className = 'task'
    color.style.backgroundColor = cor;

    taskList.appendChild(color);
}

colorTask('red');

                    //Exercicio 9
let taskSelectList = document.getElementsByClassName('selected');
function selectTask (event) {
    if (taskSelectList.length === 0) {
    event.target.classList.add('selected');
    event.target.style.border = 'solid black';
    } else {
        event.target.classList.remove('selected');
        event.target.style.border = 'unset'
    }
}

let tasks = document.querySelector('.task');

tasks.addEventListener('click', selectTask);

                    //Exercicio 10
function changeDayColor (event) {
    let colorOfTask
    if (taskSelectList.length === 0) {
    colorOfTask = '';
    } else {
    colorOfTask = document.querySelector('.selected').style.backgroundColor;
    }
    let grayColor = '#777';
    if (taskSelectList.length === 0) {
        event.target.style.color = grayColor;
    } else {
    event.target.style.color = colorOfTask;
    }
}

days.addEventListener('click', changeDayColor);

                    // BÔNUS
function addCompromisses () {
    let compromisseInput = document.querySelector('#task-input');
    let compromisseLi = document.createElement('li');
    let buttonAdd = document.querySelector('#btn-add');
    let listTask = document.querySelector('.task-list');

    function byClick () {
    if (compromisseInput.value.length > 0) {
    compromisseLi.innerText = compromisseInput.value;

    listTask.appendChild(compromisseLi);
    compromisseInput.value = ''
    } else {
        alert('Erro: Nenhum caractere encontrado');
    }
}
buttonAdd.addEventListener('click', byClick);

    function byEnter (event) {
        if (event.keyCode === 13 && compromisseInput.value.length > 0) {
            compromisseLi.innerText = compromisseInput.value;

        listTask.appendChild(compromisseLi);
        compromisseInput.value = ''
        } else if (event.keyCode === 13 && compromisseInput.value.length <= 0) {
            alert('Erro: Nenhum caractere encontrado')
        }
    }
compromisseInput.addEventListener('keyup', byEnter);
}
addCompromisses()

                    // Bônus Pessoal
function deleteTasks () {
    let btnRefresh = document.createElement('button');
    btnRefresh.id = 'refresh';
    btnRefresh.innerText = 'Apagar Compromissos';

    let contentCpm = document.querySelector('.input-container');
    contentCpm.appendChild(btnRefresh);
    
    function deleting () {
        var elemento = document.querySelector('.task-list');
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
        }
    }
btnRefresh.addEventListener('click', deleting);
}
deleteTasks ()