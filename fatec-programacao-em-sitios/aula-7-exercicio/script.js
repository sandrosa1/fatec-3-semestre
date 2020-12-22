
    cep.addEventListener('input', function () {

        let tamanho = cep.value.length
        if(tamanho == 5)
        {
            cep.value =cep.value +'-'

        }
        else if(cep.value.length == 9)
        {
            cep = cep.value
            buscaCep(cep)
        }
    })

    function buscaCep(obj) {
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

    var inputs = document.querySelectorAll(".input")
    console.log(inputs)
    var entradas = Array.prototype.slice.call(inputs);

    cadastrar.addEventListener('click',function () {
        validaCampos()
    })

    function validaCampos()
    {

        var cont = 0
        for (let i =0; i < entradas.length; i++)
        {

            if(!entradas[i].value)
            {
                entradas[i].style.borderColor = "#f00"
                entradas[i].innerHTML = 'Preencher campos'
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
        }



    }
    function mensagem(obj, msg){
        obj.innerHTML = msg
    }

    function situacao(obj, cor){
        obj.style.color = cor
        alert('chano')

    }

    function cor(obj, cor){

        obj.style.Color = cor

    }




