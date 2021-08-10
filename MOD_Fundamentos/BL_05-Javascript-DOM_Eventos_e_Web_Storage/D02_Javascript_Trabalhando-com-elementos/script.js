                    // Exercício 1
let body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerText= 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);
let titleId = document.querySelector('h1');
titleId.id = 'titulo';

                    // Exercício 2
let main = document.createElement('main');
body.appendChild(main);
let mainId = document.querySelector('main');
mainId.id = 'main-content';

                    // Exercício 3
let sectionCenter = document.createElement('section');
body.appendChild(sectionCenter);
let centerId = document.querySelector('section');
centerId.id = 'center-content';

                    // Exercício 4