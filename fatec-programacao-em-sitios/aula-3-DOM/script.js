

//var txtNome = document.getElementById('nome').Value
//console.log(txtNome)


//var txtNome = document.querySelectorAll('#nome').value
//var txtNome = document.querySelectorAll('#nome')

//txtNome.value
//console.log(txtNome)


/*botao.addEventListener('click',function(){
    if(nome.value){
        nome.style.borderColor = '#00ff00'
    }else{
        nome.style.borderColor = '#f00'
    }
})*/

botao.addEventListener('click', function(){ 

    let txtNome = document.getElementById('nome')

    if(txtNome.value){
        txtNome.style.borderColor = '#00ff00'
        msg.innerHTML = 'Ok'
    }else{
        txtNome.style.borderColor = '#f00'
        msg.innerHTML = 'Preencha seu nome'
    }

})