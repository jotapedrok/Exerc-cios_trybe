let ePalindromo = false

function palindromo(palavra) {
    if (palavra === palavra.split('').reverse().join('')) {
ePalindromo = true
    }
    else {''}
    console.log(ePalindromo)
    ePalindromo = false
}

palindromo('desenvolvimento')
palindromo('arara')
