var erroNome = document.querySelector('.m-nome')
var erroCpf = document.querySelector('.m-cpf')
var erroIdade = document.querySelector('.m-idade')
var erroSexo = document.querySelector('.m-sexo')
var retorno = document.querySelector('.retorno')

var txtNome = document.getElementById('nome')
var txtCpf = document.getElementById('cpf')
var txtIdade = document.getElementById('idade')
var txtSexo = document.getElementById('sexo')

botao.addEventListener('click', function () {

    let existeErro = false

    if (txtNome.value == '') {
        existeErro = true
        txtNome.style.borderColor = 'red'
        erroNome.innerHTML = 'Informe o Nome'
    } else {
        txtNome.style.borderColor = 'revert'
        erroNome.innerHTML = ''
    }

    if (txtCpf.value == '') {
        existeErro = true
        txtCpf.style.borderColor = 'red'
        erroCpf.innerHTML = 'Informe o CPF'
    } else if (txtCpf.value.length != 11) {
        existeErro = true
        txtCpf.style.borderColor = 'red'
        erroCpf.innerHTML = 'CPF inválido, diferente de 11 números'
    } else {
        txtCpf.style.borderColor = 'revert'
        erroCpf.innerHTML = ''
    }

    if (txtIdade.value == '') {
        existeErro = true
        txtIdade.style.borderColor = 'red'
        erroIdade.innerHTML = 'Informe a Idade'
    } else if (txtIdade.value == '0') {
        existeErro = true
        txtIdade.style.borderColor = 'red'
        erroIdade.innerHTML = 'Informe uma Idade maior que "0"'
    } else {
        txtIdade.style.borderColor = 'revert'
        erroIdade.innerHTML = ''
    }

    if (txtSexo.value == '') {
        existeErro = true
        txtSexo.style.borderColor = 'red'
        erroSexo.innerHTML = 'Informe o Sexo'
    } else {
        txtSexo.style.borderColor = 'revert'
        erroSexo.innerHTML = ''
    }

    if (existeErro) {
        retorno.innerHTML = 'EXISTEM ERRO DE VALIDAÇÃO !!!'
        retorno.style.color = 'red'
    } else {
        let idadeRestante = 0
        if (txtSexo.value == 'M') {
            idadeRestante = 65 - parseInt(txtIdade.value)
        } else {
            idadeRestante = 60 - parseInt(txtIdade.value)
        }

        if (idadeRestante > 0) {
            retorno.innerHTML = 'VOCÊ NÃO APOSENTOU - FALTAM ' + idadeRestante + ' ANOS'
            retorno.style.color = 'green'
        } else {
            retorno.innerHTML = 'VOCÊ JÁ APOSENTOU'
            retorno.style.color = 'red'
        }
    }
})