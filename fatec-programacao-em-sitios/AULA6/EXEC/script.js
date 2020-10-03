CarregarItens()

gravar.addEventListener('click', GravarItens)

limpar.addEventListener('click', LimparCarrinho)

function LimparCarrinho() {
    localStorage.clear()
    carrinho.value = ''
    itens.innerHTML = 0
    detalhes.innerHTML = 0
}

function GravarItens() {
    let produtos = []

    if (localStorage.hasOwnProperty('produtos')) {
        produtos = JSON.parse(localStorage.getItem('produtos'))
    }

    produto = {
        descricao: descricao.value,
        qtde: qtde.value,
        valor: (qtde.value * valor.value)
    }

    produtos.push(produto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    CarregarItens()

    descricao.value = ''
    qtde.value = ''
    valor.value = ''
}

function CarregarItens() {
    let produtos = []
    let valorTotal = 0
    let strItens = '';
    carrinho.value = ''

    if (localStorage.hasOwnProperty('produtos')) {
        produtos = JSON.parse(localStorage.getItem('produtos'))

        produtos.forEach(produto => {
            valorTotal += produto.valor
            strItens += 'DESCRIÇÃO: ' + produto.descricao +
                ' QTDE: ' + produto.qtde +
                ' TOTAL: ' + produto.valor + '\n'
        })
        carrinho.value = strItens
    }
    itens.innerHTML = produtos.length
    detalhes.innerHTML = valorTotal
}