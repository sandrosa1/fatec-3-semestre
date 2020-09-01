
function Mega(){
    let numMega = 59
    for(i = 0; i < 6; i++){
        document.write(Math.round((Math.random()*numMega)+1)+" ")
    }
}

function Quina(){
    let numMega = 79
    for(i = 0; i < 5; i++){
        document.write(Math.round((Math.random()*numMega)+1)+" ")
    }
}

function Loto(){
    let numMega = 24
    for(i = 0; i < 14 ; i++){
        document.write(Math.round((Math.random()*numMega)+1)+" ")
    }
}


botao.addEventListener('click', function(){
    let tipo = operacao.value

    if(tipo == "mega"){
        document.write("mega ->")
        Mega()
    }else if(tipo == "quina"){
        document.write("quina ->")
        Quina()
    }else if(tipo == "loto"){
        document.write("Lotofacil ->")
        Loto()
    }
})