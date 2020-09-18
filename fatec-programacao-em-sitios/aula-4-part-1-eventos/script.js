clique1.addEventListener('click', function () {
    alert('clicou 1x')
})

clique2.addEventListener('dblclick', function () {
    alert('clicou 2x')
})

mouse_entra.addEventListener('mouseenter', function () {
    alert('Mouse está na area do botão')
})

mouse_sai.addEventListener('mouseout', function () {
    alert('Mouse saiu da area do botão')
})

nome.addEventListener('focus', function () {
    nome.style.backgroundColor = 'red'
})

nome.addEventListener('blur', function () {
    nome.style.backgroundColor = 'white'
})

nome.addEventListener('input', function () {
    contador.innerHTML = 'Faltam ' + (10 - nome.value.length) + ' letras'
})

email.addEventListener('keypress', function (event) {
    let tecla = (event.keyCode ? event.keyCode : event.wich)

    if (tecla == 13) {
        nome.focus()
    }
})