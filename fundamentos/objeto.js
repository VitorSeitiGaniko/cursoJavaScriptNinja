let pessoa

pessoa = {
    nome: 'Vitor',
    peso: 64,
    altura: 167
}

let carro = {
    marca: 'honda',
    modelo: 'civic',
    ano: 2020
}

//function sem nome
let saudacao = function(){
    return 'Bom dia'
}

//Adicionando uma nova propriedade para o objeto
pessoa.sexo = 'masculino'
pessoa.andar = function(){
    return 'caminhando'
}

console.log(saudacao())

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.andar())
console.log(carro)

pessoa.peso = 70

console.log(pessoa)