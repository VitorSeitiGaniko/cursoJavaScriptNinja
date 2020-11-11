//console.log('JS no navegador, JS externo')

//Aqui voce encontra exemplos do uso do this e função construtora

(function(){
    
    var meuObjeto = {
        prop: 1,
        init: function init(){
            return this      //É a mesma coisa que dar um "return meuObjeto"
        }
    }

    console.log(meuObjeto.init())


    function myfunction(){
        return this         //Nesse caso o this é o objeto global
    }

    console.log('myfunction: ', myfunction())
    console.log('myfunction é global ', myfunction() === window)


    //FUNÇÃO CONSTRUTORA
      function MyConstructor(){
          this.prop1 = 'ola',
          this.prop2 = 'tchau'
      }

      var construtor1 = new MyConstructor()
      console.log('Meu construtor: ', construtor1.prop2)


    //Arguments
    //Ele traz os argumentos da função em um formato como se fosse um array
    function meusArgumentos(){
        return arguments
    }

    console.log(meusArgumentos(3,70,5,6,7,88))

})()