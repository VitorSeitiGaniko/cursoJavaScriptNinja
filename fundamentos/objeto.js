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
console.log(pessoa.altura)
console.log(pessoa.andar())
console.log(carro)

delete pessoa.sexo

pessoa.peso = 70

console.log(pessoa)

//Traz as propriedades do objeto
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa).length)


//Prototype (Herança)
var obj1 = {
    x: 1,
    y: 2
}

var obj2 = Object.create(obj1)

console.log(obj1)
console.log(obj2)
console.log(obj2.x)
console.log(obj2.y)

var obj3 = Object.create(obj2)
console.log(obj3.x)

//Verifica se ele é prototipo de algum outro objeto
//O objeto 2 é pai do objeto 1
console.log(obj2.isPrototypeOf(obj1))

//O objeto 1 é pai do objeto 2
console.log(obj1.isPrototypeOf(obj2))

//O objeto 2 é pai do objeto 3
console.log(obj2.isPrototypeOf(obj3))



var objConvert = {
    nome: 'Vitor',
    idade: 23,
    cidade: 'Embu das Artes'
}
console.log(objConvert)

//Converte para arquivo JSON
var objJSON = JSON.stringify(objConvert)
console.log(objJSON)

//Converte para um objeto normal
var objNormal = JSON.parse(objJSON)
console.log(objNormal)
