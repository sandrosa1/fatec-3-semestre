
cep.addEventListener('input', function () {

    if(cep.value.length == 8)
    {
        cep = cep.value
        buscaCep(cep)
    }

})


function buscaCep(obj) {
    cep = obj

    fetch('https://viacep.com.br/ws/${cep}/json/')

        .then(response => response.json())
        .then(json => {
            logradouro.value = json.cep +' - ' + json.logradouro
        })

        .catch(erro => console.error('ERRO: '+erro))

}


//<span>Insira seu CEP para carregar as infromações</span>
//<input id="cep" type="text">
  //  <button id="enviar">Enviar</button>
   // <section id="resultado"></section>

   // <script>

       // enviar.addEventListener('click', () => {

       // fetch(`https://viacep.com.br/ws/${cep.value}/json`)
            //.then(response => response.json())
           // .then(cepAjax => {

                //resultado.innerHTML = `
           // <span>Cep</span>
          //  <input type="text" value="${cepAjax.cep}"><br>
            //<span>logradouro</span>
           // <input type="text" value="${cepAjax.logradouro}"><br>
           /// <span>complemento</span>
           // <input type="text" value="${cepAjax.complemento}"><br>
           // <span>bairro</span>
          //  <span>localidade</span>
           // <input type="text" value="${cepAjax.localidade}"><br>
           // <span>uf</span>
          //  <input type="text" value="${cepAjax.uf}"><br>
            //<span>ibge</span>
            //<input type="text" value="${cepAjax.ibge}"><br>
           // <span>gia</span>
            //<input type="text" value="${cepAjax.gia}"><br>
           // <span>ddd</span>
           // <*/input type="text" value="${cepAjax.ddd}"><br>
            //<span>siafi</span>
          //  <input type="text" value="${cepAjax.siafi}"><br>
            `
           // })
   // })

    ///</script>