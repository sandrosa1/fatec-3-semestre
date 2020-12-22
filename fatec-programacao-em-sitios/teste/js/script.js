const URL_BASE = 'https://wllsistemas.com.br/api/v3/cliente/'  //Endereço da pasta servidor
let msg1 = "Atualizado com reload"
window.onload = printTela(msg1)
//valida os elementos na api e valida os elementos dos inputs
btnGravar.addEventListener('click',function()
{
    let inputs = document.querySelectorAll(".input")
    let entradas = Array.prototype.slice.call(inputs);

    var cont = 0
    for (let i =1; i < entradas.length; i++)
    {

        if(!entradas[i].value)
        {
            entradas[i].style.borderColor = "#f00"
            document.getElementById(`resp${[i]}`).innerHTML = 'Preencher campos!'
            document.getElementById(`resp${[i]}`).style.color = "#f00"
            cont += 1

        }
        else
            {
            entradas[i].style.borderColor = "#0f0"
        }

    }
    //Tudo certo chama função gravar
    if(cont == 0) gravar()


})
// Edita e inseri elementos na API
function gravar(){
    
    if(id.value == ""){
        let msg 
        fetch(URL_BASE, {
            method :'POST',
            body:'nome='+nome.value+'&email='+email.value+'&tipo='+tipo.value,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => response.json())
            .then(json => swal(json.mensagem))
            .then(json => printTela(json))



    }else{
            fetch(URL_BASE, {
                method :'PUT',
                body:'id='+id.value+'&nome='+nome.value+'&email='+email.value+'&tipo='+tipo.value,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => response.json())
                .then(json => swal(json.mensagem ))
                .then(json => printTela(json))
            
        
    }
  limpaInputs()
}

//Carrega os elementos da api
btnCarregar.addEventListener('click',function(){
    let msg = "Atualizando"
    printTela(msg)
   
})

//limpa os campos do inputs
btnLimpar.addEventListener('click', function(){

   limpaInputs()
})


// exclui uma usuario da api
function excluir(obj){
        swal({
      title: 'Você está certo disso?',
      text: "Ação irreversivel!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, tenho certeza!',
      cancelButtonText: 'Cancelar...'
      }).then((result) => 
      { if (result.value) 
        { 
        fetch(URL_BASE +obj,{
            method:'DELETE'
        })
        //Na primera promisse nao tem o json
        //.then(response => console.log(response))
            .then(response => response.json())
            .then(json => swal(json.mensagem ))
            .then(json => printTela(json))
        }
      })
      
   
   
}

// coloca nos inputs os values para serem editados
function editar(obj){
    fetch(URL_BASE+obj)
    .then(response => response.json()) 
    .then(json => {
        console.log(json)
        id.value = json[0].ID
        nome.value= json[0].NOME
        email.value = json[0].EMAIL
        tipo.value = json[0].TIPO

    })
    
}

//Imprime as tabelas de cadastro
function printTela(obj)
{  
    console.log(obj)
    let elementos = []
    fetch(URL_BASE,{
        cache:'no-store'
    })
    //Na pirmeira promisse nos recebemos um JSON
    //Na segunda promisse retorna o json no console.log
    .then(response => response.json())
    .then(json => {
        let itens = []
        itens = json
        console.log(itens)
        for (let i = 0; i < itens.length; i ++ ){
            elementos[i] = `<tr id="linha${itens[i].ID}">
            <td>${itens[i].ID}</td>
            <td>${itens[i].NOME}</td>
            <td>${itens[i].EMAIL}</td>
            <td>${itens[i].TIPO}</td>
            <td><a href="javascript:void(0)" onclick= "editar(${itens[i].ID})"id="btn-editar-${itens[i].ID}" class="btn btn-primary">Editar <i class="fa fa-edit"></i></a>
                <a href="javascript:void(0)" onclick= "excluir(${itens[i].ID})"id="btn-excluir-${itens[i].ID}" class="btn btn-danger">Excluir <i class="fas fa-trash-alt"></i></a></td>
        </tr>`
        }
        document.getElementById('tabela').innerHTML= elementos.join('')
        limpaInputs()
    })
    
}
function limpaInputs(){
    let input = document.querySelectorAll(".input")
    for (let i =1; i < input.length; i++){
        input[i].style.borderColor = 'revert'
        document.getElementById(`resp${[i]}`).innerHTML = ''
    }
    id.value = ''
    nome.value = ''
    email.value = ''
    tipo.value = ''
}