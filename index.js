let niveis = 8.032;
let nickname = "Diego";
let nomeDoNivel;

switch (true) {
    case niveis >= 0 && niveis <= 1.000:
        nomeDoNivel = "Ferro";
        break;
    case niveis > 1.001 && niveis <= 2.000:
        nomeDoNivel = "Bronze";
        break;
    case niveis > 2.001 && niveis <= 5.000:
        nomeDoNivel = "Prata";
        break;
    case niveis > 6.001 && niveis <= 7.000:
        nomeDoNivel = "Ouro";
        break;
    case niveis > 7.001 && niveis <= 8.000:
        nomeDoNivel = "Platina";
        break;
    case niveis > 8.001 && niveis <= 9.000:
        nomeDoNivel = "Ascendente";
        break;
    case niveis > 9.001 && niveis <= 10.000:
        nomeDoNivel = "Imortal";
        break;
    case niveis > 10.001:
        nomeDoNivel = "Radiante";
        break;
    default:
        nomeDoNivel = "Nível não reconhecido";
}

console.log("O Herói de " + nickname + " está no nível de " + nomeDoNivel);
