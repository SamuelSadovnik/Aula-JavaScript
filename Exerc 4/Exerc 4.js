// Objeto representando o pedido
const pedidoRestaurante = {
    cliente: 'João Silva',
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
        console.log(`${index + 1}. ${prato.nome} - R$${prato.preco.toFixed(2)}`);
      });
      console.log(`Total: R$${this.total.toFixed(2)}`);
    }
  };
  
  pedidoRestaurante.adicionarPrato({ nome: 'Lasanha', preco: 25.50 });
  pedidoRestaurante.adicionarPrato({ nome: 'Salada', preco: 15.00 });
  pedidoRestaurante.adicionarPrato({ nome: 'Suco de Laranja', preco: 8.00 });

  pedidoRestaurante.exibirResumo(); 
  