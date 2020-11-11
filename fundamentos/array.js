let numeros
numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(numeros[4])


i = numeros.length - 1
while(i >= 0){
    console.log(numeros[i])
    --i
}

numeros.push('vitor')
numeros.push({carro: 'Civic',
                ano: 2020})
numeros.push('deletar')

console.log(numeros)
console.log(numeros.length) 

//Deleta o ultimo item do array
numeros.pop()
console.log(numeros)

var comidas = ['pastel', 'lasanha', 'parmeziana']
console.log(comidas)

//Juntas os itens 
comidas.join()
comidas.join(', ')

comidas.reverse()
console.log(comidas)
comidas.reverse()
console.log(comidas)

//Ordena por ordem alfabetica
comidas.sort()
console.log(comidas)


var numbers = [1, 2, 3, 4]

//Transforma em string separado por vírgula
var ex = numbers.toString()
console.log(ex)

//Apanas concatena mas não adiciona de vdd
console.log(numbers.concat(10))
console.log(numbers)

//Adiciona um item no inicio do array
numbers.unshift(0)
console.log(numbers)

//Deleta o primeiro item do array
numbers.shift()
console.log(numbers)

//Ele assim como o concat não modifica o Array é apenas um select como se fosse no SQL
console.log(numbers.slice(2))
console.log(numbers.slice(0,2))
console.log(numbers.slice(0,3))
console.log(numbers.slice(-2))
console.log(numbers.slice(-1))

//Ele sim modifica o array, vc definde o indice de inicio e a QUANTIDADE DE ITENS A SER RETIRADOS
numbers.splice(3)
console.log(numbers)

numbers.push(4, 5, 6, 7)
console.log(numbers)

numbers.splice(3, 4)
console.log(numbers)

//Tambem é possivel adicionar pelo método splice
numbers.splice(1, 0, 1.1, 1.2, 1.5, 1.9)
console.log(numbers)
numbers.splice(1, 4)
numbers.splice(3, 0, 4, 5, 6, 7)

console.log('-------------------------')


//Método forEach
numbers.forEach(function(item, index, array){
    console.log(item , index, array)
})

numbers.forEach(function(item){
    console.log(item)
})

var sum = 0
numbers.forEach(function(item){
    return sum += item
})
console.log('soma: ', sum)


//Método Every
//No caso estamos testando se todos os numeros do array são menores que 4
//É como se fosse um and
var every = numbers.every(function(item){
    return item < 4
})
console.log(every)


//Método Some
//No caso estamos testando se pelo menos um numero do array é menor que 4, se sim retorna true
//É como se fosse um or
var some = numbers.some(function(item){
    return item < 4
})
console.log(some)


//Método map
//Cria um novo array baseado nos itens do array passado
var map = numbers.map(function(item, indice, array){
    return item + 2
})

console.log(numbers)
console.log(map)


//Método Filter
//Cria um novo array mas utilizando um filtro
var filtro = numbers.filter(function(item, index, indice){
    return item > 4
})

console.log(filtro)

//Tambem podemos concatenar esses dois
var filtroEMap = numbers.map(function(item, indice, array){
    return item + 2
}).filter(function(item, index, indice){
    return item > 4
})

console.log('ola', filtroEMap)


//Método Reduce
var reduce = numbers.reduce(function(acumulado, item, indice, array){
    return acumulado + item
}, 0) //esse zero é o valor do acumulado, vc define esse valor no final da function

console.log('valor do reduce', reduce)


var nome = ['v', 'i', 't', 'o', 'r']
var reduceNome = nome.reduce(function(acumulado, item, indice, array){
    return acumulado + item
})
console.log('valor do reduce nome:', reduceNome)


var reduceNomeInverso = nome.reduceRight(function(acumulado, item, indice, array){
    return acumulado + item
})
console.log('valor do reduce nome inverso:', reduceNomeInverso)


//IndexOf
//Retorna o indice do item do array, ou seja, a posição do item no array
console.log(numbers.indexOf(4))

//Caso não tenha o item no array ele retorna '-1'
console.log(numbers.indexOf(10))

console.log(nome.indexOf('r'))

//O segundo elemento defini de onde ele vai começar sua busca pelo array
console.log(nome.indexOf('r', 3))
console.log(nome.indexOf('i', 2))

//lastIndexOf
//A mesma coisa entretanto sua busca começa pelo final do array
console.log('LastIndexOf: ')
console.log(nome.lastIndexOf('r'))


//Método isArray
//Serve para verificar se é um array ou não
//Ele retorna true ou false
console.log(Array.isArray(nome))
