const URL_BASE = 'http://localhost/fatec-3-semestre/fatec-programacao-em-sitios/aula_8/servidor/index.php/'  //Endereço da pasta servidor

btnRequestGET.addEventListener('click',function(){
    let msg
    fetch(URL_BASE)
    //Na pirmeira promisse nos recebemos um JSON
    //Na segunda promisse retorna o json no console.log
    .then(response => response.json())
    .then(json => {
        msg = json.mensagem
        document.getElementById('r_get').innerHTML=msg 
    })
})
// Enviando um POST
//NO Primeiro parametro a URL base, {no segundo o header  pode ser customizado utilizando chave e valor
// O headers e muito importante atraves dele passamos os parametros da requisição
// Nesse caso falado que os parametros estao indo no corpo da requisição
// Content-Type -> Flague de configuração do protocolo
//'application/x-www-form-urlencoded -> maneira em que vai ser montada a requisição

btnRequestPOST.addEventListener('click',function(){
     let msg 
    fetch(URL_BASE, {
        method :'POST',
        body:'nome='+nome.value,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(json => {
        msg = json.mensagem
        console.log(msg)
        document.getElementById('r_post').innerHTML=msg 
    })
})

btnRequestPUT.addEventListener('click',function(){
    let msg
    fetch(URL_BASE, {
        method :'PUT',
        body:'codigo='+codigo.value+'&email='+email.value,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(json => {
        msg = json.mensagem
        document.getElementById('r_put').innerHTML=msg 
    })
})

btnRequestDELETE.addEventListener('click',function(){
    let msg
    fetch(URL_BASE+del.value,{
        method:'DELETE'
    })

    //Na primera promisse nao tem o json
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(json => {
        msg = json.mensagem
        document.getElementById('r_delete').innerHTML=msg 
    })
})
limpar.addEventListener('click',function(){
    elementes = document.querySelectorAll("input")
    console.log(elementes)
    for(i=0; i > elementes.length; i++)
    document.getElementById(elementes[1]).value = "" 
})