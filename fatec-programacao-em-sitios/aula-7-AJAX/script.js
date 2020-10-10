
enviar.addEventListener('click',function () {

    fetch('https://viacep.com.br/ws/18135310/json/')

        .then(response => response.json())
        .then(json => {
            retorno.value = json.cep +' - ' + json.logradouro
        })

        .catch(erro => console.error('ERRO: '+erro))

})