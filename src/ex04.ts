class Geladeira {
    itensG: string[]

    constructor(protected cor: string, protected litros: number, protected marca: string) {
        this.itensG = []
    }

    adicionarItem(item: string) {
        this.itensG.push(item)
        console.log(`Item adicionado: ${item}`)
        console.log(`itens na geladeira: ${this.itensG}`)
    }

    tirarItens(nome: string) {
        const index = this.itensG.findIndex(i => i === nome)

        if (index !== -1) {
            this.itensG.splice(index, 1)
            console.log(`Item removido: ${nome} ***`)
        } else {
            console.log(`Item não encontrado: ${nome} ???`)
        }
        console.log(`Itens na grladeira: ${this.itensG}`)
    }

    visualizarItems() {
        console.log('--------itens na geladeira------------')
        this.itensG.forEach(i => console.log(`item: ${i}`))
    }

}

const minhaGeladeira = new Geladeira('inox', 450, 'Electrolux')

minhaGeladeira.adicionarItem("Leite")
minhaGeladeira.adicionarItem("Ovos")
minhaGeladeira.adicionarItem("Manteiga")
minhaGeladeira.adicionarItem("carne")
minhaGeladeira.adicionarItem("uva")

minhaGeladeira.visualizarItems()

minhaGeladeira.tirarItens("Ovos")
minhaGeladeira.tirarItens("carne")

minhaGeladeira.visualizarItems()