let n = 5;
let asteriscos = "*";
let linhaVezes = "";
let centro = (n+1)/2
let controleEsq = centro
let controleDir = centro

for (let index = 0; index <= centro; index += 1) {
    for (positindex = 0; positindex <= n; positindex += 1){
        if (positindex > controleEsq && positindex < controleDir) {
            linhaVezes = linhaVezes + asteriscos
        }
        else {
            linhaVezes = linhaVezes + ' '
        }
    }
    console.log (linhaVezes)
    linhaVezes = "";
    controleEsq -= 1;
    controleDir += 1;
}