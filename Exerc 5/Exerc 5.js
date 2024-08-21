class Tarefa {
    constructor(titulo, descricao, prioridade = "média") {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = false; 
        this.prioridade = prioridade; 
    }

    
    concluir() {
        this.status = true;
    }

    reabrir() {
        this.status = false;
    }

    exibirDetalhes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Status: ${this.status ? "Concluída" : "Pendente"}`);
        console.log(`Prioridade: ${this.prioridade}`);
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(titulo, descricao, prioridade) {
        const novaTarefa = new Tarefa(titulo, descricao, prioridade);
        this.tarefas.push(novaTarefa);
    }

    removerTarefa(titulo) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.titulo !== titulo);
    }


    concluirTarefa(titulo) {
        const tarefa = this.tarefas.find(tarefa => tarefa.titulo === titulo);
        if (tarefa) {
            tarefa.concluir();
        } else {
            console.log("Tarefa não encontrada.");
        }
    }

    exibirTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach(tarefa => {
            tarefa.exibirDetalhes();
            console.log("---------------");
        });
    }
}

const gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa("Jogar Damas", "Quinta-Feira", "Baixa")
gerenciador.adicionarTarefa("Jogar Valorant", "Imortal", "Alta")
gerenciador.adicionarTarefa("Estudar C", "String", "Alta")
gerenciador.adicionarTarefa("Teste para remover", "Teste", "Alta")
gerenciador.exibirTarefas();

gerenciador.concluirTarefa("Jogar Valorant")
gerenciador.concluirTarefa("Jogar Damas")
gerenciador.concluirTarefa("Estudar C")

gerenciador.removerTarefa("Teste para remover")

console.log("Tarefas atualizadas:");
gerenciador.exibirTarefas();
