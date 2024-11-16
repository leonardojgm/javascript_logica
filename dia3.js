// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
let caminho = null;

while (caminho !== "Front-End" && caminho !== "Back-End") {
    caminho = prompt("Qual caminho você deseja seguir para área de Front-End ou seguir para a área de Back-End?");
    
    if (caminho !== "Front-End" && caminho !== "Back-End")
    {
        alert("Digite apenas Front-End ou Back-End.");
    }
}

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
let tecnologiaPrincipal = null;

if (caminho === "Front-End") {    
    while (tecnologiaPrincipal !== "React" && tecnologiaPrincipal !== "Vue") {
        tecnologiaPrincipal = prompt("Na área de Front-End, você quer aprender React ou aprender Vue?");
    
        if (tecnologiaPrincipal !== "React" && tecnologiaPrincipal !== "Vue")
        {
            alert("Digite apenas React ou Vue.");
        }
    }
} else {
    while (tecnologiaPrincipal !== "C#" && tecnologiaPrincipal !== "Java") {
        tecnologiaPrincipal = prompt("Na área de Back-End, você quer aprender C# ou aprender Java?");
    
        if (tecnologiaPrincipal !== "C#" && tecnologiaPrincipal !== "Java")
        {
            alert("Digite apenas C# ou Java.");
        }    
    }
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
let especializacao = null;

while (especializacao !== "área escolhida" && especializacao !== "Fullstack") {
    especializacao = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");
    
    if (especializacao !== "área escolhida" && especializacao !== "Fullstack")
    {
        alert("Digite apenas área escolhida ou Fullstack.");
    }
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
let tecnologias = [];

while (true) {
    const tecnologia = prompt("Quais tecnologias você gostaria de se especializar ou de conhecer?");

    tecnologias.push(tecnologia);
        
    alert(`${tecnologia} é realmente uma tecnologia muito legal!`);

    let continuar = null;

    while (continuar !== "S" && continuar !== "N") {
        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (S = Sim ou N = Não)");
    
        if (continuar !== "S" && continuar !== "N")
        {
            alert("Digite apenas S ou N.");
        }
    }

    if (continuar === "N") {
        break;
    } 
} 

alert(`Você gostaria de seguir o caminho do ${caminho}, com foco em ${tecnologiaPrincipal}. Em seguida ${especializacao === 'área escolhida' ? 'continuar se especializando.' : 'se tornar Fullstack'}.`);

alert(`Você gostaria de se especializar ou de conhecer as seguintes tecnologias: ${tecnologias.join(", ")}.`);

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.