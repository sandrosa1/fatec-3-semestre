ler.addEventListener('click', function () {
    let objPessoas = JSON.parse(conteudo.value)
    objPessoas.forEach(p => {
        resultado.value += 'NOME: ' + p.nome + ' - IDADE: ' + p.idade + '\n'
        p.linguagens.forEach(linguagem => {
            resultado.value += ' - ' + linguagem + '\n'
        })
    })
})