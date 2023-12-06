let vitorias = 20;
let derrotas = 5;
let nomeDoNivel;

let nivel = vitorias - derrotas;

if (nivel <= 10){
    nomeDoNivel = "Ferro";
}
else if (nivel > 11 && nivel <= 20){
    nomeDoNivel = "Bronze";
}
else if (nivel > 21 && nivel <= 50){
    nomeDoNivel = "Prata";
}
else if (nivel > 51 && nivel <= 80){
    nomeDoNivel = "Ouro";
}
else if (nivel > 81 && nivel <= 90){
    nomeDoNivel = "Diamante";
}
else if (nivel > 91 && nivel <= 100){
    nomeDoNivel = "Lendário";
}
else if (nivel > 101){
    nomeDoNivel = "Imortal"
}
else {
    console.log("Nivel indefinido")
}

let resultado = soma(vitorias, derrotas)
function soma(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}

console.log("O Herói tem de saldo de "  + vitorias + " está no nível de " + nomeDoNivel)