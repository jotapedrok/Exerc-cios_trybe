                    // Exercício 1
let body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerText= 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);
let titleId = document.querySelector('h1');
titleId.className = 'titulo';

                    // Exercício 2
let main = document.createElement('main');
body.appendChild(main);
let mainId = document.querySelector('main');
mainId.className = 'main-content';

                    // Exercício 3
let sectionCenter = document.createElement('section');
let mainC = document.querySelector('.main-content');
mainC.appendChild(sectionCenter);
let centerId = document.querySelector('section');
centerId.className = 'center-content';

                    // Exercício 4
let p1 = document.createElement('p');
let sCenter = document.querySelector('.center-content');
sCenter.appendChild(p1);
let paragraph1 = document.querySelector('.center-content p');
paragraph1.innerText = 'I love Lo-Fi...';

                    // Exercício 5
let secLCreat = document.createElement('section');
body.appendChild(secLCreat);
let sectionLeft = document.getElementsByTagName('section')[1];
sectionLeft.className = 'left-content';

                    // Exercício 6
let secRCreat = document.createElement('section');
body.appendChild(secRCreat);
let sectionRight = document.getElementsByTagName('section')[2];
sectionRight.className = 'right-content';

                    // Exercício 7
let imgLCreat = document.createElement('img');
sectionLeft.appendChild(imgLCreat);
let imgLeft = document.querySelector('.left-content img');
imgLeft.setAttribute('src', 'https://picsum.photos/200');
imgLeft.className = 'small-image';

                    // Exercício 8
let listCreat = document.createElement('ul');
sectionRight.appendChild(listCreat);
let list = document.querySelector('.right-content ul');
list.className = 'lista';
let listNums = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (i = 0; i < listNums.length; i += 1) {
    let num = listNums[i];
    let criaLi = document.createElement('li');
    criaLi.innerHTML = num;
    list.appendChild(criaLi);
}





