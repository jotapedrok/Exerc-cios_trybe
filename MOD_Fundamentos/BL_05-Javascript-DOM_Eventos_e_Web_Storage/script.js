   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function insereTxt (local, index, texto) {
document.getElementsByTagName(local)[index].innerHTML = texto;
}
insereTxt ('p', 0, 'Formado na Trybe, Casado e com um bom emprego, desenvolvendo meu software de organização financeira');

function corFundo (classe, index, cor) {
    document.getElementsByClassName(classe)[index].style.backgroundColor = cor;
}
corFundo ('main-content', 0, 'rgb(76,164,109)');

// function bgColorCenter (classe, index, cor) {
//     document.getElementsByClassName(classe)[index].style.backgroundColor = cor;
// }
// bgColorCenter ('center-content', 0, 'white');

corFundo ('center-content', 0, 'white');

// function corrigeTxt (tag, index, texto) {
//     document.getElementsByTagName(tag)[index].innerHTML = texto;
// }
// corrigeTxt ('h1', 0, 'Exercícios 5.1 - Javascript');

insereTxt ('h1', 0, 'Exercícios 5.1 - Javascript');

function upperCase (tag) {
    let paragraph = document.getElementsByTagName(tag);
    for (let i = 0; i < paragraph.length; i += 1) {
        paragraph[i].innerHTML = paragraph[i].innerHTML.toUpperCase();
    }
}
upperCase ('p');

function showConsole (tag) {
    let paragraph = document.getElementsByTagName(tag);
    for (let i = 0; i < paragraph.length; i += 1) {
        console.log(paragraph[i].innerText);
    }
}
showConsole ('p');