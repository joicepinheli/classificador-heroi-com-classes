// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o ataque conforme o tipo
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não possui ataque definido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthus", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shifu", 60, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

// Laço de repetição para mostrar os ataques de todos os heróis
const listaHerois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < listaHerois.length; i++) {
    listaHerois[i].atacar();
}
