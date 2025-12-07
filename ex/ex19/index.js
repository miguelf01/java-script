
// class Pessoa {
//     nome;
//     idade;

//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     descrever() {
//         console.log(`meu nome é ${this.nome}, minha idade é ${this.idade}`)
//     }

// }

// function compararPessoas(p1, p2) {
//     if (p1.idade > p2.idade) {
//         console.log(`${p1.nome} é maior que ${p2.nome}`)
//     } else if (p2.idade > p1.idade) {
//         console.log(`${p2.nome} é maior que ${p1.nome}`)
//     } else {
//         console.log(`${p1.nome} e ${p2.nome} tem a msm idade`)
//     }
// }

// const jp = new Pessoa('joao pedro', 18)
// const jm = new Pessoa('joao miguel', 11)

// compararPessoas(jp, jm)

// class Carro {
//     marca;
//     cor;
//     gastoPorKm;

//     constructor(marca, cor, gastoPorKm){
//         this.marca = marca
//         this.cor = cor
//         this.gastoPorKm = gastoPorKm
//     }

//     calcularGastoDePercuso(distanciaPorKm, precoCombustivel) {
//         return distanciaPorKm*this.gastoPorKm*precoCombustivel
//     }

// }

// const uno = new Carro('fiat', 'prata', 1/12)
// console.log(uno.calcularGastoDePercuso(70, 5))
// const palio = new Carro('fiat', 'preto', 1/10)
// console.log(palio.calcularGastoDePercuso(70, 5))

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / (this.altura*this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return('voce esta abaixo do peso')
        } else if (imc >= 18.5 && imc < 25) {
            return('peso normal')
        } else if (imc >= 25 && imc < 30) {
            return('acima do peso')
        } else if (imc >= 30 && imc < 40) {
            return('obeso')
        } else {
            return ('obesidade grave')
        }
    }

}

const jose = new Pessoa('miguel', 45, 1.50)
console.log(jose.classificarImc())