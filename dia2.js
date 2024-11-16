const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let gostaEstudar = null;

while (gostaEstudar != 1 && gostaEstudar != 2) {
    gostaEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

    if (gostaEstudar == 1) {
        alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
    } else if (gostaEstudar == 2){
        alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
    } else {
        alert(`Digite apenas 1 ou 2.`);
    }    
}