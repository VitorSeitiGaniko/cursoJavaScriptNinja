/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lista = [4, 2, 8, 10, 14]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function imprimir(args){
    return args
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(imprimir(lista)[2])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function imprimir2(args, indice){
    return args[indice]
}
console.log(imprimir2(lista,4))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
lista2 = [24, 'L2', 50, 'Jk', 22]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(lista2)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    var livros = {
        'Culpa Das Estrelas':{
            quantidadePaginas: 110,
            autor: 'John Green',
            editora: 'Abril'
        },
        'Sprint':{
            quantidadePaginas: 90,
            autor: 'Google',
            editora: 'epoca'
        },
        'Capitao Cueca':{
            quantidadePaginas:80,
            autor: 'Vitor',
            editora: 'sla'
        }
    }
    return !nomeLivro ? livros : livros[nomeLivro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())
console.log(book('Culpa Das Estrelas'))

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Capitao cueca tem ' + book('Capitao Cueca').quantidadePaginas + 'Paginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let livroTeste = 'Sprint'
console.log('O autor do livro '+livroTeste+' é '+book(livroTeste).autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let livroTeste2 = 'Culpa Das Estrelas'
console.log('O livro '+livroTeste2+' foi publicado pela editora '+book(livroTeste2).editora)