let n = 5;
let asteriscos = "*";
let linhaVezes = "";
let posiçao = n

for (let index = 0; index <= n; index += 1) {
    for (positindex = 0; positindex <= n; positindex += 1){
        if (positindex < posiçao) {
            linhaVezes = linhaVezes + ' '
        }
        else {
            linhaVezes = linhaVezes + asteriscos
        }
    }
    console.log (linhaVezes)
    linhaVezes = "";
    posiçao -= 1

}
