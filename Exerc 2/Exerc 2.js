function calcvestoque(produto, limite) {
    const valorTotal = produto.preco * produto.quantidade;

    if (valorTotal > limite) {
        console.log("Alerta: O valor total em estoque excede o permitido");
    }

    return valorTotal;
}

const produto = {
    nome: "Iphone",
    preco: 15000.00,
    quantidade: 4
};

const limite = 50000.00;
calcvestoque(produto, limite);