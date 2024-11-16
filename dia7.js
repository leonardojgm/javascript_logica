function soma(a, b) {
    return a + b; 
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function sair() {
    return "Até a próxima.";
}

function selecionarOpcao(opcao, a, b) {
    switch (opcao) {
        case "1":
            return soma(a, b);
        case "2":
            return subtracao(a, b);
        case "3":
            return multiplicacao(a, b);
        case "4":
            return divisao(a, b);
        case "5":
            return sair();
        default:
            return "Opção inválida.";
    }
}

function informarOpcao() {
    return "Escolha uma das opções abaixo:\n 1 = Somar\n 2 = Subtrair\n 3 = Multiplicar\n 4 = Dividir\n 5 = Sair";
}

function iniciarCalculadora() {
    let opcao = null;
    let a = null;
    let b = null;

    while (opcao !== "5") {
        opcao = prompt(informarOpcao());

        if (opcao !== "5") {
            a = parseFloat(prompt("Digite o primeiro valor:"));
            b = parseFloat(prompt("Digite o segundo valor:"));

            alert(selecionarOpcao(opcao, a, b));
        }
    }
}

iniciarCalculadora();