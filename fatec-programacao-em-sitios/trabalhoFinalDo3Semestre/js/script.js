window.onload = limpaInputs()
const URL_BASE = 'https://wllsistemas.com.br/api/v3/cliente/'  //Endereço da pasta servidor
//função para loading
const CarregandoLoading = () => loader.innerHTML = `Processando<img id="img2" src="img/loading.gif">`
const ParandoLoading = () => loader.innerHTML = ''
const CarregandoTabela = () => loader.innerHTML = `Atualizando tabela<img id="img2" src="img/loading.gif">`
const ParandoTabela = () => loader.innerHTML = ''
//Faz o controle das divs
function MudarEstado(obj) 
{
    let display = obj
    
    if(display == "home")
    {
        document.getElementById('home').style.display = 'block';
        document.getElementById('cadastrar').style.display = 'none';
        document.getElementById('tabela').style.display = 'none';
    }
    if(display == "tabela")
    {
        printTela(display)
        document.getElementById('tabela').style.display = 'block';
        document.getElementById('botoes').style.display = 'block';
        document.getElementById('acaoT').style.display = 'none';
        document.getElementById('home').style.display = 'none';
        document.getElementById('cadastrar').style.display = 'none'; 
    }
    if(display == "cadastrar")
    {  
        document.getElementById('cadastrar').style.display = 'block';
        document.getElementById('home').style.display = 'none';
        document.getElementById('tabela').style.display = 'none';
        document.getElementById('btnCarregar').style.display = 'none';
    }
    if(display == "completo")
    {  
        printTela(display)
        document.getElementById('cadastrar').style.display = 'block';
        document.getElementById('tabela').style.display = 'block';
        document.getElementById('acaoT').style.display = 'block';
        document.getElementById('home').style.display = 'none';
        document.getElementById('botoes').style.display = 'none';
        document.getElementById('btnCarregar').style.display = 'inline';
       
    }
  
}
//gravar os elementos e valida os campos
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
            document.getElementById(`resp${[i]}`).innerHTML = 'Preencher este campo!'
            document.getElementById(`resp${[i]}`).style.color = "#f14b4b"
            cont += 1

        }
        else
            {
            document.getElementById(`resp${[i]}`).innerHTML = ''
            entradas[i].style.borderColor = "#0f0"
        }
    }
    //Tudo certo chama função gravar
    if(cont == 0) gravar()
})
//limpa os campos do inputs
btnLimpar.addEventListener('click', function()
{
    limpaInputs()
})
 //Carrega os elementos da api
btnCarregar.addEventListener('click',function()
{
    printTela('completo')
   
})
// Edita e inseri elementos na API viu POST ou PUT dependendo da necessidade
function gravar(){
    
    if(id.value == "")
    {
        CarregandoLoading()
        let msg 
        fetch(URL_BASE, 
        {
            method :'POST',
            body:'nome='+nome.value+'&email='+email.value+'&tipo='+tipo.value,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(json => swal(json.mensagem))
        .then(json => ParandoLoading())
        .catch(erro =>  console.log(erro))
        .finally( final => printTela('completo'))
    }
    else
    {
        CarregandoLoading()
        fetch(URL_BASE,
        {
            method :'PUT',
            body:'id='+id.value+'&nome='+nome.value+'&email='+email.value+'&tipo='+tipo.value,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(json => swal(json.mensagem ))
        .then(json => ParandoLoading())
        .catch(erro =>  console.log(erro))
        .finally(final => printTela('completo'))
    }
  limpaInputs()
}
// Ha função excluir gera um alert confirmando se deseja excluir e exclui se confirmado e atualiza a tabela
function excluir(obj)
{

    CarregandoLoading()
    swal({
        title: `Deseja excluir o(a) Cliente?`,
        text: 'Ação irreversivel!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, tenho certeza!',
        cancelButtonText: 'Cancelar...'
        })
        .then((result) => { if (result.value) 
        { 
            fetch(URL_BASE +obj,{
                method:'DELETE'
            })
            .then(response => response.json())
            .then(json => swal(json.mensagem ))
            .then(json => ParandoLoading())
            .catch(erro =>  console.log(erro))
            .finally( final => printTela('completo'))  
        }
    })
    .catch(erro =>  console.log(erro))  
    .finally( final => printTela('completo'))
}   


// coloca nos inputs os values para serem editados
function editar(obj)
{
    CarregandoLoading()
    fetch(URL_BASE+obj,{
        cache:'no-store'
    })
    .then(response => response.json()) 
    .then(json => {
        console.log(json)
        id.value = json[0].ID
        nome.value= json[0].NOME
        email.value = json[0].EMAIL
        tipo.value = json[0].TIPO
    })
    .catch(erro =>  console.log(erro))
    .finally( final => ParandoLoading())
     
}

//Imprime as tabelas de cadastro
function printTela(obj)
{  
    if(obj == 'completo')
    {
        CarregandoTabela()
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
                <td><a href="#top" onclick= "editar(${itens[i].ID})"id="btneditar" class="btn btn-primary">Editar <i class="fa fa-edit"></i></a>
                    <a href="#top" onclick= "excluir(${itens[i].ID})"id="btnexcluir" class="btn btn-danger">Excluir <i class="fas fa-trash-alt"></i></a></td>
            </tr>`
            }
            limpaInputs()
        })
        .catch(erro =>  console.log(erro))
        .finally( final =>{
            document.getElementById('tabelas').innerHTML= elementos.join('')
            ParandoTabela()
        } ) 
    }
    else
    {
        CarregandoTabela()
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
            </tr>`
            }
            
            limpaInputs()
        })
        .catch(erro =>  console.log(erro))
        .finally( final =>{
            document.getElementById('tabelas').innerHTML= elementos.join('')
            ParandoTabela()
        } ) 

    }
     
}
function limpaInputs(){
    let input = document.querySelectorAll(".input")
    for (let i =1; i < input.length; i++){
        input[i].style.borderColor = 'black'
        document.getElementById(`resp${[i]}`).innerHTML = ''
    }
    id.value = ''
    nome.value = ''
    email.value = ''
    tipo.value = ''
}