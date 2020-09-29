var arrayCompras = [];
lerStorage()

adicionar.addEventListener('click', function () {
    let carrinho = {
        tipo: tipo.value,
        quantidade: quantidade.value,
        preco: preco.value
    }

    arrayCompras.push(carrinho)
    //string_json.value = JSON.stringify(arrayCompras)
    // Gravar no local storage a chave (compras, ( converte o objeto arrayCliente para um Json)
    localStorage.setItem('compras', JSON.stringify(arrayCompras))
    lerStorage()
})


remover.addEventListener('click', function () {
     localStorage.clear()
     lerStorage()

 })

function lerStorage() {
    string_json.value = ''
    let compras = [];
    let contador = 0;
    let total = 0;
    //if(Verifica se dentro do local storage existe a uma chave)
    if (localStorage.hasOwnProperty('compras')) {

        // variavel = um array de objetos (que esta no localStorage (chave))
        compras = JSON.parse(localStorage.getItem('compras'))
        arrayCompras = compras

        compras.forEach(compra => {
            string_json.value += compra.tipo + '->Quantidade = ' + compra.quantidade + ' valor unitario = R$ ' + compra.preco + ' Valor total = R$'+ parseFloat( compra.quantidade)* parseFloat( compra.preco)+'\n'
            contador++
            total += parseFloat( compra.quantidade)* parseFloat( compra.preco)

        })
    }

    legenda.innerHTML = 'Seu Carrinho ('+contador+')- Valor da Compra R$ '+total
}