//                   Explicação  1                //

//Grava no local storage (Aplication/local Storage/File)
// gravar.addEventListener('click',function(){
//     //localStorage.setItem('js1','Grava no text area')
//
//     //Copia o conteudo do text area e grava o grava no local storage com a chave js1
//     // ele vai subescrever pois a chave nao foi renomeada
//     localStorage.setItem('js1',conteudo.value)
//
// })
//
// // Le o conteuda da chave e envia para o text area
// ler.addEventListener('click', function () {
//     conteudo.value = localStorage.getItem('js1')
// })
//
// //Remove a chave que for escolhida
// remover.addEventListener('click', function () {
//     localStorage.removeItem('js1')
// })
//
// //Limpa todas as chaves
// limpar.addEventListener('click', function () {
//     localStorage.clear()
// })

///----------------------------Explicação 2-------------------------------///
 var arrayCliente = []; //encherga de todos lugares
 lerStorage()

gravar.addEventListener('click', function () {
    let pessoa = {
        nome: nome.value,
        idade: idade.value
     }

     arrayCliente.push(pessoa)
     string_json.value = JSON.stringify(arrayCliente)
    // Grava no local storage a chave (clientes, ( converte o objeto arrayCliente para um Json)
     localStorage.setItem('clientes', JSON.stringify(arrayCliente))
    })

    // ler.addEventListener('click', function () {
    //     conteudo.value = localStorage.getItem('js')
    // })
    //
    // remover.addEventListener('click', function () {
    //     localStorage.removeItem('js1')
    // })
    //
    // limpar.addEventListener('click', function () {
    //     localStorage.clear()
    // })

 function lerStorage() {
    string_json.value = ''
    let clientes = [];
    let contador = 0;
     //if(Verifica se dentro do local storage existe a uma chave)
       if (localStorage.hasOwnProperty('clientes')) {
           // variavel = um array de objetos (que esta no localStorage (chave))
            clientes = JSON.parse(localStorage.getItem('clientes'))
            clientes.forEach(cliente => {
                string_json.value += cliente.nome + ' - ' + cliente.idade + '\n'
                contador++
            })
       }

   legenda.innerHTML = 'Total de Clientes: ' + contador
 }