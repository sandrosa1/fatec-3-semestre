// case sensitive
//var nome = "Sandro" // variavel global
//let nome2 = "Sandro" //Trabalha dentro de um escobo exemplo

//var casado = true   // Boleano
//var nome = "sandrosa1"  //string
//var numero = 32.9    // number int e float
//undefined  // Indefinida
//null  // nao existe nada

//console.log("mensagem")
//console.error("mensagem de erro")
//console.warn("mensagem de alerta")


/*botao.addEventListener('click', function f() {
    let val = valor.value
    let val2 = valor2.value

    alert(`${val}` -`${val2}` ) //interbolação
})*/



botao.addEventListener('click', function () {
    var val1 = valor1.value
    var val2 = valor2.value

    //Soma(val1, val2)
     //ExibeTexto(val1, val2)
    // VerificaSexo(sexo.value)
})

function Soma(v1, v2) {
    alert(parseInt(v1) + parseInt(v2))
}


function ExibeTexto(v1, v2) {
    alert(`${v1} - ${v2}`)
}

function VerificaSexo(letra) {
    if (letra == 'M') {
        alert('MASCULINO')
    } else {
        alert('FEMININO')
    }
}