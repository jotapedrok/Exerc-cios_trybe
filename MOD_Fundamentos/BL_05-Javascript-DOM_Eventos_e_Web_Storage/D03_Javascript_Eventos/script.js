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
            if (diasFeriados[i].style.backgroundColor === 'white' || diasFeriados[i].style.backgroundColor === 'purple') {
                diasFeriados[i].style.backgroundColor = 'unset';
            } else if (diasFeriados[i].innerText === '25') {
                diasFeriados[i].style.backgroundColor = 'purple';
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

    function changeTxtColor(eventChTC){
        for (let i = 0; i < diasDeSexta.length; i += 1) {
            if (diasDeSexta[i].style.backgroundColor === 'red' || diasDeSexta[i].style.backgroundColor === 'purple') {
                diasDeSexta[i].style.backgroundColor = 'unset';
                diasDeSexta[i].innerText = sextasDez[i];
            } else if (diasDeSexta[i].innerText === '25') {
                diasDeSexta[i].style.backgroundColor = 'purple';
                diasDeSexta[i].innerText = 'Sextou!!!';
            } else {
                diasDeSexta[i].style.backgroundColor = 'red';
                diasDeSexta[i].innerText = 'Sextou!!!';
            }
        }
    }

    botaoFriday.addEventListener('click', changeTxtColor);
}
corTextFriday();