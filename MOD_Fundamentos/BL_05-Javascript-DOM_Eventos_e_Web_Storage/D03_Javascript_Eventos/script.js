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
function botao(nomeDoBotao){
    let divButton = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    
button.innerHTML = nomeDoBotao;
button.id = 'btn-holiday'
divButton.appendChild(button)
} 
botao('Feriados')