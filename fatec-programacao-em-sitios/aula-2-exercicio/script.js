
botao.addEventListener('click', function (){
    let numero1 = valor1.value
    let numero2 = valor2.value
    let acao = operacao.value
    if(acao == "soma"){
        Somar(numero1, numero2)
    }else if (acao == "subtracao"){
        Subtracao(numero1, numero2)
    }else if (acao == "multiplicacao"){
        Multiplicacao(numero1, numero2)
    }else if (acao == "divisao"){
        Divisao(numero1, numero2)
    }else if (acao == "potenciacao"){
        Potencia(numero1, numero2)
    }

})

function Somar(v1, v2)
{
    resultado.value = (parseInt(v1) + parseInt(v2))
}
function Subtracao(v1, v2)
{
    resultado.value = (parseInt(v1) - parseInt(v2))
}
function Multiplicacao(v1, v2)
{
    resultado.value = (parseInt(v1) * parseInt(v2))
}
function Divisao(v1, v2)
{
    resultado.value = (parseInt(v1) / parseInt(v2))
}
function Potencia(v1, v2)
{
    resultado.value = (parseInt(v1) ** parseInt(v2))
}
