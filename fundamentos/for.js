let numeros
numeros = [1, 2, 3, 4, 5, 'japa']

for (var i = 0; i<numeros.length; i++){
    console.log(numeros[i])
}


for(var i = 0; i<10 ; i++){
    if(i === 5){
        break
    }
    console.log(i)
}

/*
  Faça um loop de 0 a 20, que adicione cada número como um item de um
  array chamado `numbers`. Se o contador for maior que 10, saia do loop.
  Mostre no console os números no array.
  */
 console.log( 'De 0 a 10:' );
 var numbers = [];
 for (var i = 0; i < 20; i++) {
   if (i > 10) {
     break;
   }
   numbers.push(i);
 }

 console.log(numbers);

 /*
 Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
 criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
 esses. Se o número for ímpar, pular para o próximo número.
 Mostrar no console os números do array.
 */
 console.log( 'Pares de 0 a 20:' );
 numbers = [];
 for (var i = 0; i <=20; i++) {
   if (i % 2 !== 0) {
     continue;
   }
   numbers.push(i);
 }
 console.log(numbers);