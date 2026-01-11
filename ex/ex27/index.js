
/*

Boolean
Null
Underfined
Number
String
Synbol

*/

// console.log(10 == '10');
// console.log(10 === '10');

// console.log(!'1')

// const nome = '0'

// if (nome) {
//     console.log('suceess');
//     return
// }

// const x = { nome: undefined }

// console.log(JSON.stringify(x))

// +Infinity -Infinity e NaN
// Doble Precision 64-bit binary format IEEE 754

// const x = { nome: undefined }

// console.log(JSON.stringify(x))

// console.log("<div id=\"10\">Hello World</div>");
// console.log('<div id="10">\'Hello World\'</div>');

// const id = 10

// console.log('\t<div id="' + id + '">\n\t\tHello World\n\t</div>');

// console.log(`   <div id="${id}}">
//        Hello World
//    </div>`);

// const x = Symbol('10');
// const y = x;

// console.log(x === y);

// sempre que um Symbol é gerado ele é diferente


const pessoa = {
    nome: 'joao miguel',
    'idade': 11, // o '' na propriedade nao muda nada
    sobrenome: ' da silva albuquerque',
    teste: function() {
        console.log(`meu nome é ${this.nome + this.sobrenome}`)
    }
}

pessoa['nome'] = 'joao pedro'
pessoa['peso'] = 47.5
// teste: () => console.log('hello world')

// pessoa.sobrenome = 'da silva albuquerque'

console.log(pessoa);

// console.log(pessoa.nome);
// console.log(pessoa['sobre nome']);
pessoa.teste()
