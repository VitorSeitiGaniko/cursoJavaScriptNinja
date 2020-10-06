function estado(uf){
    switch(uf){
        case 'SP':
            return 'São Paulo'
            break
        case 'RJ':
            return 'Rio de Janeiro'
            break
    }
    
}
console.log(estado('SP'))
console.log(estado('RJ'))