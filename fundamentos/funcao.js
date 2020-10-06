function somar (n1, n2){
   return n1+n2
}

function bomdia(){
    return 'Bom dia !!!'
}

let a = 'vitor'
function falar() {
    return a
}

function carro(){
    return {
        carro: 'uno', 
        ano: 2010
    }
}

function valorA(a){
    return function(b){
        return a+b
    }
}

//var teste = valorA(2)

console.log(somar(1,3))
console.log(bomdia())
console.log(falar())
console.log(carro())
console.log(carro.name)
console.log(valorA(2)(3))
