let opcao = null;
let categorias = [];

while (opcao !== "3") {
    opcao = prompt("Você deseja:\n 1 = adicionar uma comida na sua lista de compras.\n 2 = remover uma comida da sua lista de compras.\n 3 = sair.");

    switch (opcao)
    {
        case "1":
            {                
                let comida = prompt("Qual comida você deseja adicionar?");
                let categoria = prompt(`Qual a categoria da comida ${comida}?`);   
                let categoriaExistente = categorias.find(c => c.categoria === categoria);
                
                if (categoriaExistente) { 
                    categoriaExistente.comidas.push(comida);
                } else {
                    let novaCategoria = { categoria, comidas: [] };

                    novaCategoria.comidas.push(comida);

                    categorias.push(novaCategoria);         
                }
                
                alert(`Você adicionou ${comida} na categoria ${categoria} na sua lista de compras.`);
            }
            break;
        case "2":
            {
                let comida = prompt(`${informarComidas()}\nQual comida vocé deseja remover?`);
                let categoria = prompt(`${informarComidas()}\nQual a categoria da comida ${comida}?`);                
                let categoriaExistente = categorias.find(c => c.categoria === categoria);

                if (categoriaExistente) {
                    let comidaExistente = categoriaExistente.comidas.find(c => c === comida);

                    if (comidaExistente) {
                        categoriaExistente.comidas.splice(categoriaExistente.comidas.indexOf(comidaExistente), 1);
                    } else {
                        alert(`Comida ${comida} não encontrada na categoria ${categoria}.`);
                    }
                } else {
                    alert(`Categoria ${categoria} nao encontrada.`);
                }
            }
            break;
        case "3":
            break;
        default:
            alert("opção inválida.");
    } 
}

function informarComidas() {
    if (categorias.length > 0) {
        let texto = "Lista de compras:\n";
    
        for (let categoria of categorias) { 
            texto += `${categoria.categoria}: `;
    
            for (let comida of categoria.comidas) {
                if (comida === categoria.comidas[categoria.comidas.length - 1]) {
                    texto += `${comida}.`;
                } else {
                    texto += `${comida}, `;
                }
            }
    
            if (categoria !== categorias[categorias.length - 1]) {
                texto += "\n";
            }
        }
    
        return texto;
    } else {
        return 'Sua lista de compras está vazia.';
    }
}