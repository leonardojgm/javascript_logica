/*
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
*/


let numero = 7;
let tentativas = 3;
const minimo = 0;
const maximo = 10

numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

while (tentativas > 0) {
    let chute = parseInt(prompt(`Qual o seu chute de ${minimo} a ${maximo}?`));

    if (chute === numero) {
        alert("Parabéns! Vocé acertou!");
        break;
    } else {
        tentativas--;
        alert("Vocé errou. Tente novamente.");
    }    
}

if (tentativas === 0) {
    alert(`Suas tentativas acabaram. O número era ${numero}.`);
}