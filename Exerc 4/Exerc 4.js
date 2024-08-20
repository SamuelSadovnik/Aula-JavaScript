
const pedidoRestaurante = {
    cliente: 'Samu',
    pratos: [],
    total: 0,
  
    adicionarPrato: function(prato) {
      this.pratos.push(prato);
      this.calcularTotal(); 
    },
  

    calcularTotal: function() {
      this.total = this.pratos.reduce((soma, prato) => soma + prato.preco, 0);
    },

    exibirResumo: function() {
      console.log(`Cliente: ${this.cliente}`);
      console.log('Pratos pedidos:');
      this.pratos.forEach((prato, index) => {
        console.log(`${index + 1}. ${prato.nome} - R$${prato.preco}`);
      });
      console.log(`Total: R$${this.total}`);
    }
  };
  
  pedidoRestaurante.adicionarPrato({ nome: 'Sushi', preco: 199 });
  pedidoRestaurante.adicionarPrato({ nome: 'Picanha', preco: 80 });
  pedidoRestaurante.adicionarPrato({ nome: 'Coca-Cola', preco: 5 });
  pedidoRestaurante.adicionarPrato({ nome: 'Pizza', preco: 79})
  pedidoRestaurante.adicionarPrato({ nome: 'Terere', preco: 5})

  pedidoRestaurante.exibirResumo(); 
  