
    var arrayCep = []; 
    var busca 

    //1. Este evento e responsavel pela captura do cep
    //Ele coloca um hifen apśs o 5 digito
    //Quando chegar no 9 digito, submete para a situação de decisão:
    //se ele contem o cep no localStorange  chama a função lerStorage()
    //senao chama a função buscaCep()
    cep.addEventListener('input', function () {
        let tamanho = cep.value.length
        if(tamanho == 5)
        {
            cep.value =cep.value +'-'

        }
        else if(cep.value.length == 9)
        {
            cep = cep.value
            busca = cep
            if(localStorage.hasOwnProperty(busca))
            {
                alert("Chamamos a função lerStoge")
                lerStorage()
                
            }
            else
            {
                alert("Chamamos a função buscaCep")
                buscaCep(cep)
                
            }  
        }
    })

    //Esta função consome os dados do via cep e retorna nos inputs
    function buscaCep(obj) {
        alert("Estamos na função buscaCep")
    var cep = obj
        
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

        .then(response => response.json())
        .then(json => {
            logradouro.value =  json.logradouro
            complemento.value =  json.complemento
            localidade.value = json.localidade
            bairro.value =  json.bairro
            uf.value =  json.uf
            ibge.value =  json.ibge
            gia.value = json.gia
            ddd.value =  json.ddd
            siafi.value =  json.siafi

        })

        .catch(erro => console.error('ERRO: '+erro))

    }

    //Este função vai buscar os dados do cep armazenado no locaStorage
    function lerStorage() {
        let aux = busca;
        alert("Estamos na função lerStoge")
        // variavel = um array de objetos (que esta no localStorage (chave))
        aux = JSON.parse(localStorage.getItem(aux))
        arrayCep = aux

        aux.forEach(aux1 => {
            logradouro.value =  aux1.logradouro
            localidade.value = aux1.localidade
            bairro.value =  aux1.bairro
            uf.value =  aux1.uf
            ibge.value =  aux1.ibge
            gia.value = aux1.gia
            ddd.value =  aux1.ddd
            siafi.value =  aux1.siafi
                    
        })    
    }

    //Após os dados serem preenchidos vamos guardalos na variavel inputs
    var inputs = document.querySelectorAll("input")

   // Colocamos em outra variavel para validações futuras
    var entradas = Array.prototype.slice.call(inputs);  
  
   // Este evento chama a função validaCampos para fazer as validações
    cadastrar.addEventListener('click',function () {
        alert("Chamamos a função validaCampos")
        validaCampos()
    })

    //Esta funçao responsavel por:
    //ver se todos os campos estão preenchidos atraves de um for na variavel entradas
    //Estamos no for
        //se a resposta for false ele pinta a borda de vermelho variavel cont recebe 1
        //senao  ele pinta a borda de verde 
    //se variavel cont for diferente de zero ele emite alert Preencher campos
    //senao ele chama a função cadastraCep e da um refresh na pagina
    function validaCampos()
    {
        alert("Estamos na função validaCampos")
        var cont = 0
        for (let i =0; i < entradas.length; i++)
        {

            if(!entradas[i].value)
            {
                entradas[i].style.borderColor = "#f00"
                cont += 1

            }
            else
                {
                entradas[i].style.borderColor = "#0f0"
            }

        }
        if(!cont == 0)
        {
            alert('Favor preencher todos campos')
        }
        else
        {
            alert('Operação realizada com sucesso')
            alert("Chamamos a função cadastrar")
            cadastrarCep()
            window.location.reload()
           
        }
    }

//Este função cadastra o cep no local storage
 function cadastrarCep() {
    alert("Estamos na função cadastrarCep")
     //Coloca-se a variavel busca na variaval aux, pois sera necessario usar o nome busca para nomear a chave
     //
    let aux = busca
    aux = {
        logradouro : logradouro.value, 
        localidade : localidade.value,
        bairro  : bairro.value, 
        uf  : uf.value, 
        ibge  : ibge.value,
        gia  : gia.value, 
        ddd  : ddd.value, 
        siafi  : siafi.value
    }

    arrayCep.push(aux)
    // aqui vamos usar busca para dar o nome a chave
    // Gravar no local storage a chave (busca , ( converte o objeto arrayCliente para um Json)
    localStorage.setItem( busca , JSON.stringify(arrayCep))
}

 
