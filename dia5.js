let adicionar = null;
let categorias = [];

while (adicionar !== "não") {
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? (sim ou não)");

    if (adicionar !== "sim" && adicionar !== "não") {
        alert("Digite apenas sim ou não.");
    } else if (adicionar === "sim") {
        let comida = prompt("Qual comida você deseja adicionar?");
        let categoria = prompt("Qual categoria essa comida se encaixa?");        
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
}

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

    alert(texto);
} else {
    alert('Sua lista de compras está vazia.');
}