var carro = function(){
    return {
        marca: 'Honda',
        modelo: 'Civic',
        cor: 'Vermelho'
    }
}

console.log(carro())
console.log(carro().cor)
console.log(carro().modelo)

var carro2 = carro()
carro2.modelo = 'Fit'

console.log(carro2)

function mostrarMarca(arg){
    return arg.marca
}

console.log(mostrarMarca(carro2))