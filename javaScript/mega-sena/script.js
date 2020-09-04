var res =[]
function Mega(){
    let numMega = 59
    for(i = 0; i < 6; i++){
        res = (Math.round((Math.random()*numMega)+1) + " ")
    }
    return res
}

function Quina(){
    let numMega = 79
    for(i = 0; i < 5; i++){
        res = (Math.round((Math.random()*numMega)+1)+" ")
    }
    return res

function Loto(){
    let numMega = 24
    for(i = 0; i < 14 ; i++){
        res = (Math.round((Math.random()*numMega)+1)+" ")
    }
    return res
}

resultado.value = res


botao.addEventListener('click', function()
    {
        var tipo = operacao.value
        if(tipo == "mega")
        {
            Mega()
        }else if(tipo == "quina")
        {
            Quina()
        }else if(tipo == "loto")
        {
            Loto()
        }
    }
)
