/*------------------------*/
// const pessoa= {
//     genero: 'masculino',
//     idade: 37
// };

// const antonio = {
//     nome: 'Antonio',
//     __proto__: pessoa
// }

// console.log(antonio.idade);
// console.log(antonio.__proto__);

/*------------------------*/

//uso do operador new
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}

const antonio = new Pessoa('Antonio', 37);
antonio.falar()

const lorena = {
    genero: 'feminino'
}
Pessoa.call(lorena, 'Lorena', 38)
console.log(lorena)

