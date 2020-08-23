
quantidadeDeFormularios = document.forms.length
document.write("Quantidade e formulários ->"+quantidadeDeFormularios +"<br><hr>")

formularios = document.forms[1].id
document.write("Aponta para id do formulário 1 com o método document.forms[1].id -> " + formularios +"<br><hr>")

formulariosItem = document.forms.item(0).id
document.write("Aponta para o Id de um formulário através da função document.forms.item(0).id ->  " + formulariosItem +"<br><hr>")

formulariosName = document.forms.namedItem("curso2").id
document.write("Aponta para o name de um formulário através da função document.forms.namedItem(\"curso2\").id ->" + formulariosName +"<br><hr>")

formulariosNameInner = document.forms.namedItem("curso2").innerHTML
document.write("Retorna um formulário ->" + formulariosNameInner +"<br><hr>")

//Apontar para um elemento

formulariosElement = document.forms.namedItem("curso2").elements[1].value
document.write("Aponta para o elemento ->" + formulariosElement +"<br><hr>")

fm = document.forms[0] // aponta para o formulário
el = fm.elements      // obtem todos elementos do formulário obs: se quiser pegar um elemento -> fm.elements[elemento]

//formatando um elemento
//el[0].style.backgroundColor ="#ddd"
//el[0].value ="Outro nome"
// document.write(fm);

//formatando Mais de um elemento
// -1 por que naão tem a funçao retorna 2 mais o indice começa do ZERO
for (let i = 0; i < el.length -1; i++){
    el[i].style.backgroundColor ="#ddd"
    el[i].value ="Outro nome"
}

//Outra maneira
document.write("<br> pegando o value do elemento -> "+ document.getElementById("curso1").elements[0].value)





