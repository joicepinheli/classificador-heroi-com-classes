# 🛡️ Classificador de Nível de Herói - Versão com Classes

Este projeto foi desenvolvido em **JavaScript** para representar heróis de uma aventura utilizando **classes e objetos**.  
O programa simula ataques personalizados de acordo com o tipo de herói, aplicando conceitos de **variáveis, operadores, laços de repetição, estruturas de decisão, funções, classes e objetos**.

---

## 📋 Estrutura da Classe

A classe **Heroi** possui as seguintes propriedades:

- `nome` → Nome do herói
- `idade` → Idade do herói
- `tipo` → Tipo do herói (ex: guerreiro, mago, monge, ninja)

### Método
- `atacar()` → Exibe a mensagem:
  ```
  O {tipo} atacou usando {ataque}
  ```
  Onde o ataque varia conforme o tipo do herói:
  - mago → usou magia
  - guerreiro → usou espada
  - monge → usou artes marciais
  - ninja → usou shuriken

---

## ⚙️ Exemplo de Código

```javascript
// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

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

const listaHerois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < listaHerois.length; i++) {
    listaHerois[i].atacar();
}
```

---

## 🚀 Execução no Node.js

### Versão utilizada
- **Node.js v22.21.0**

### Linha de comando
Para executar o código no terminal, utilize:

```bash
node heroi.js
```

---

## 📌 Saída esperada

```
O guerreiro atacou usando usou espada
O mago atacou usando usou magia
O monge atacou usando usou artes marciais
O ninja atacou usando usou shuriken
```

---

## 📂 Estrutura do Projeto

```
desafio-heroi-classes/
│
├── heroi.js    # Código principal com a classe Heroi
└── README.md   # Documentação do projeto
```

---

## ✨ Objetivo

Exibir ao final a mensagem:

```
O {tipo} atacou usando {ataque}
```

Permitindo simular diferentes heróis e seus ataques personalizados.
```