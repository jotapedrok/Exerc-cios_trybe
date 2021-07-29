// let a = 30;
// let b = 60;

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

// let c = 90;

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

// let somaAngulos = a+b+c;
// let anguloPorAngulo = a > 0 && b > 0 && c > 0;

// if (anguloPorAngulo) {
//     if (somaAngulos === 180) {
//         console.log("true")
//     }
//     else {
//         console.log("false")
//     }
// }
// else {
//     console.log("ERROR")
// }

// let peçaXadrez = "Rei";

// switch(peçaXadrez.toLowerCase()) {
//     case "bispo":
//         console.log("Bispo -> Diagonal");
//         break;
//     case "peão":
//         console.log("Peão -> Uma casa para frente(Pode andar duas na primeira rodada)");
//         break;
//     case "cavalo":
//         console.log("Cavalo -> Anda em L e pode pular outras peças");
//         break;
//     case "torre":
//         console.log("Torre -> Anda em Linha Reta");
//     case "rainha":
//         console.log("Rainha -> Anda quantas casas quiser em qualquer direção");
//         break;
//     case "rei":
//         console.log("Rei -> Uma casa para qualquer direção");
//         break;
//     default:
//         console.log("Erro! Peça Inválida.")
//     }

// let nota = 45;

// if (nota >= 90 && nota <= 100) {
// console.log("Conceito: "+"A")
// }
// else if (nota >= 80 && nota < 100) {
// console.log("Conceito: "+"B")    
// }
// else if (nota >= 70 && nota < 100) {
// console.log("Conceito: "+"C")
// }
// else if (nota >= 60 && nota < 100) {
// console.log("Conceito: "+"D")
// }
// else if (nota >= 50 && nota < 100) {
// console.log("Conceito: "+"E")
// }
// else if (nota < 50 && nota > 0) {
// console.log("Conceito: "+"F")
// }
// else {
// console.log("Erro! Nota Inválida.")
// }

// let a = 7;
// let b = 9;
// let c = 2;

// let par = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//     par = true
// }

// console.log(par);

let a = 4;
let b = 8;
let c = 2;

let impar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    impar = true
}

console.log(impar);