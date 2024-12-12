interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void
    recuperarValorTotal(): number
  }
  
  interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
  }
  
  class Pedido implements Desconto {
    itens: ItemPedido[] = [];
  
    add(item: ItemPedido): void {
      this.itens.push(item);
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
          this.itens.splice(index, 1);
        }
      }
  
    recuperarValorTotal(): number {
      let total = this.itens
        .map((i) => i.recuperarValorTotal())
        .reduce((sum, v) => sum + v, 0);
  
      return total;
    }
  
    aplicarDescontoEmPorcentagem(desconto: number): void {
      const porcentagem = desconto / 100;
      const total = this.recuperarValorTotal()
      const descontoEmReais = total * porcentagem
      
      this.itens.forEach((item) => {
        const proporcaoItem = item.recuperarValorTotal() / total
        const descontoItem = descontoEmReais * proporcaoItem
        item.aplicarDescontoEmReais(descontoItem)
      })
    }
  }
  
  class ItemPedido implements ValorPedido, Desconto {
    valor: number;
    nome: string;
    quantidade: number;
  
    constructor(valor: number, nome: string, quantidade: number) {
      this.valor = valor;
      this.nome = nome;
      this.quantidade = quantidade;
    }
  
    recuperarValorTotal(): number {
      return this.valor * this.quantidade;
    }
  
   
  
    aplicarDescontoEmReais(desconto: number): void {
      this.valor -= desconto / this.quantidade
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100
        this.valor -= this.valor * porcentagem
    }
}

// Testando o modelo:
const pedido = new Pedido();
pedido.add(new ItemPedido(100, "Produto 1", 2))
pedido.add(new ItemPedido(200, "Produto 2", 1))
pedido.add(new ItemPedido(50, "Produto 3", 3))

console.log("Valor total inicial:", pedido.recuperarValorTotal())

pedido.aplicarDescontoEmPorcentagem(10)
console.log("Valor total com desconto de 10%:", pedido.recuperarValorTotal())

pedido.removeItem("Produto 2")
console.log("Valor total após remover Produto 2:", pedido.recuperarValorTotal())