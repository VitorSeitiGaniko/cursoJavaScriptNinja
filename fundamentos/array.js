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

console.log(numeros)
console.log(numeros.length) 