const URL_BASE = 'http://localhost/javaScript/aula_8/servidor/index.php/'  //Endereço da pasta servidor

btnRequestGET.addEventListener('click',function(){
    fetch(URL_BASE)
    //Na pirmeira promisse nos recebemos um JSON
    //Na segunda promisse retorna o json no console.log
    .then(response => response.json())
    .then(json => console.log(json))
})
// Enviando um POST
//NO Primeiro parametro a URL base, {no segundo o header  pode ser customizado utilizando chave e valor
// O headers e muito importante atraves dele passamos os parametros da requisição
// Nesse caso falado que os parametros estao indo no corpo da requisição
// Content-Type -> Flague de configuração do protocolo
//'application/x-www-form-urlencoded -> maneira em que vai ser montada a requisição

btnRequestPOST.addEventListener('click',function(){
    fetch(URL_BASE, {
        method :'POST',
        body:'nome=Sandro',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
})

btnRequestPUT.addEventListener('click',function(){
    fetch(URL_BASE, {
        method :'PUT',
        body:'codigo=663&email=teste@teste.com',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
})

btnRequestDELETE.addEventListener('click',function(){
    fetch(URL_BASE +'234',{
        method:'DELETE'
    })
    //Na primera promisse nao tem o json
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(json => console.log(json))
})
