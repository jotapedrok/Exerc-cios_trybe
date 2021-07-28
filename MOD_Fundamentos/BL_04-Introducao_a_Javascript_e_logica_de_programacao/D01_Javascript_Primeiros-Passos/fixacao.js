// const myName = "João Pedro";
// const birthCity = "Niterói";
// var birthYear = 1999

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030

// console.log(birthYear);

// // birthCity = "otro lugar";

// // console.log(birthCity);

// let base = 8;
// let altura = 5;
// let area = base*altura;
// let perimetro = base*2 + altura*2;

// console.log(area);
// console.log(base*altura)

// console.log(perimetro)
// console.log(base*2 + altura*2)

// let notaAluno = 55;

// if (notaAluno >=80) {
//     console.log ("Parabéns você foi aprovado(a)")
// }
// else if (notaAluno >= 60 && notaAluno < 80) {
//     console.log ("Você esta em nossa lista de espera")
// }
// else {
//     console.log("Você foi reprovado(a)")
// };

let statusCandidato = "comendo xuxu";

switch(statusCandidato){
    case "aprovado":
        console.log("Parabéns! Você foi aprovado(a)");
        break;

    case "lista":
        console.log("Você está em nossa lista de espera.");
        break;

    case "reprovado":
        console.log("Você foi reprovado(a)");
        break;

    default:
        console.log("Não se aplica.");
}