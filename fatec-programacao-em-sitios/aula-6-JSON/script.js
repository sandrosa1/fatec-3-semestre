//https://www.json.org/json-pt.html
//https://viacep.com.br/
//http://jsonviewer.stack.hu/

//-----EXEMPLO VIA CEP_______________

//ler.addEventListener('click', function () {
    //cria um vaiavel local que recebe um JSON
   // let strJSON = conteudoJson.value
    //console.log(strJSON)
    //Precisa conhecer o que vem no JSON (Pode ter conflitos por conta das aspas)
    //let objCep = JSON.parse(strJSON)
    //let objCep = JSON.parse(conteudoJson.value)
    //console.log(objCep)
    //Recebendo a localidade
    //resultado.value = objCep.localidade

    //Recebendo cidade e estado
  //  resultado.value = 'cidade: '+objCep.localidade+ ' UF: ' +objCep.uf

//})

ler.addEventListener('click', function () {

    let objPessoas = JSON.parse(conteudoJson.value)
    //Lendo um objeto de pessoas  (lista2.josn)
    objPessoas.forEach(pessoa => {
        resultado.value += 'NOME: '+ pessoa.nome + ' IDADE: '+ pessoa.idade +'\n'
    })

})