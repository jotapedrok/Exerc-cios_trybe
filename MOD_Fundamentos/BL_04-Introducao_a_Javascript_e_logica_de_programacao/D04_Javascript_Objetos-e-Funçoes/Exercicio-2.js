// let ePalindromo = false

// function palindromo(palavra) {
//     if (palavra === palavra.split('').reverse().join('')) {
// ePalindromo = true
//     }
//     else {''}
//     console.log(ePalindromo)
//     ePalindromo = false
// }

// palindromo('desenvolvimento')
// palindromo('arara')

// function maiorValorindex (numeros) {
//     let maiorIndex = 0;
//     for (let key in numeros) {
//         if (numeros[maiorIndex] < numeros[key]) {
//             maiorIndex = key
//         }
//     }
//     console.log(maiorIndex)
// }

// maiorValorindex ([2, 4, 6, 7, 10, 0, -3]);

// function menorValorindex (numeros) {
//     let menorIndex = 0;
//     for (let key in numeros) {
//         if (numeros[menorIndex] > numeros[key]) {
//             menorIndex = key
//         }
//     }
//     console.log(menorIndex)
// }

// menorValorindex ([2, 4, 6, 7, 10, 0, -3]);


function maisLetras (nomes) {
let letras = 0
for (let key in nomes){
    if (nomes[letras].length < nomes[key].length) {
        letras = key
    }
}
console.log(nomes[letras])
}

maisLetras (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])