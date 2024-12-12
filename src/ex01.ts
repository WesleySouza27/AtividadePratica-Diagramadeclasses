class Item {
    constructor(public valor: number, public nome: string, public descricao: string) {}
}

class Pedido01 {
    public itens: Item[]
    public valorTotal: number
    constructor() {
        this.itens = []
        this.valorTotal = 0.0
    }

    adicionarItem(item: Item) {
        this.itens.push(item)
    }

    listarItens(): string[] {
        return this.itens.map(item => `Nome ${item.nome}, Valor: ${item.valor}, Descrição: ${item.descricao}`)
    }
}

const item01 = new Item(5, 'pão', 'pão frânces assado 500g')
const item02 = new Item(10, 'bolo', 'bolo de chocolate 300g')
const item03 = new Item(2, 'bombom', 'sonho de valsa 30g')

const pedido01 = new Pedido01()

pedido01.adicionarItem(item01)
pedido01.adicionarItem(item02)
pedido01.adicionarItem(item03)

console.log(pedido01.listarItens())
