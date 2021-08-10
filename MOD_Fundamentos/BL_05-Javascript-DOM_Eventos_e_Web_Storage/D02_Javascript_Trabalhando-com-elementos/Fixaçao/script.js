                        // Fixação 1
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

                        // Fixação 2
let pai = elementoOndeVoceEsta.parentNode;
pai.style.backgroundColor = 'blue';

                        // Fixação 3
elementoOndeVoceEsta.firstElementChild.innerText = 'Lo-Fi is Amazing!';

                        // Fixação 4
pai.firstElementChild;

                        // Fixação 5
elementoOndeVoceEsta.previousElementSibling;

                        // Fixação 6
elementoOndeVoceEsta.nextSibling;

                        // Fixação 7
elementoOndeVoceEsta.nextElementSibling;

                        // Fixação 8
pai.children[2];

                        // Fixação 9
let irmaoDeOndeEuTo = document.createElement('section');
document.querySelector('#pai').appendChild(irmaoDeOndeEuTo);

                        // Fixação 10
let filhoDeOndeEuTo = document.createElement('section');
document.querySelector('#elementoOndeVoceEsta').appendChild(filhoDeOndeEuTo);

                        // Fixação 11
let filhoDoFilho = document.createElement('section');
document.querySelector('#primeiroFilhoDoFilho').appendChild(filhoDoFilho);
let filhoDoFilhoId = document.querySelector('#primeiroFilhoDoFilho section');
filhoDoFilhoId.id = 'FilhoDoPrimeiroFilhoDoFilho'

                        // Fixação 12
let filhoDoFilhoAqui = document.querySelector('#primeiroFilhoDoFilho').children[0];
filhoDoFilhoAqui.parentElement.parentElement.nextElementSibling;

                        // Fixação 13
let paiDoPai = document.querySelectorAll('#paiDoPai');

// for (i = 0; i < paiDoPai.length; i += 1) {
//     if paiDoPai[index]
// }
