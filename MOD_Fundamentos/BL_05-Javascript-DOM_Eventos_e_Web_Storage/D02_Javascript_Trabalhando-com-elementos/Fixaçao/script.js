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