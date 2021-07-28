let a = 10;
let b = 25;

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

let c = 15;

if(a > b && a > c) {
    console.log(a +" é maior que "+ b +" e "+ c)
}
    else if(b > a && b > c) {
    console.log(b +" é maior que "+ a +" e "+ c)
}
    else if(c > a && c > b){
        console.log(c +" é maior que "+ a +" e "+ b)
}
    else {
        console.log("")
    }
