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

function maiorValorindex (numeros) {
    let maiorIndex = 0;
    for (let key in numeros) {
        if (numeros[maiorIndex] < numeros[key]) {
            maiorIndex = key
        }
    }
    console.log(maiorIndex)
}

maiorValorindex ([2, 4, 6, 7, 10, 0, -3]);