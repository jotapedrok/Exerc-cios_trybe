let a = 30;
let b = 60;

// console.log("Soma: " + (a+b));

// console.log("Subtração: " + (a-b));

// console.log("Mulriplicação: " + (a*b));

// console.log("Divisão: " + (a/b));

// console.log("Módulo: " + (a%b));

// if (a>b) {
//     console.log(a +" é maior que "+ b)
// }
// else {
//     console.log(b +" é maior que "+ a)
// }

let c = 90;

// if(a > b && a > c) {
//     console.log(a +" é maior que "+ b +" e "+ c)
// }
//     else if(b > a && b > c) {
//     console.log(b +" é maior que "+ a +" e "+ c)
// }
//     else if(c > a && c > b){
//         console.log(c +" é maior que "+ a +" e "+ b)
// }
//     else {
//         console.log("")
//     }

// if(a > 0) {
//     console.log("positivo");
// }
// else if(a < 0) {
//     console.log("negativo")
// }
// else {
//     console.log("zero");
// }

let somaAngulos = a+b+c;
let anguloPorAngulo = a > 0 && b > 0 && c > 0;

if (anguloPorAngulo) {
    if (somaAngulos === 180) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}
else {
    console.log("ERROR")
}
