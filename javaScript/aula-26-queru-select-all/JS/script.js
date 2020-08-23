ps = document.querySelectorAll("p")          //Pega todos elemento da tag "p"
document.write(ps[0].innerHTML+"<br>")      //escreve o elemento abaixo do utilmo elemento
ps[0].style.color="#00f";                   // altera a cor do elemento
//ps[0].innerHTML ="Novo texto";         // muda o texto

document.write("<hr><h1>Usando um for na classe .titulo</h1><br>")
elementes = document.querySelectorAll(".titulo")     // Pega todos elementos da classe titulo
for(let i = 0; i < elementes.length ; i++){
    document.write(elementes[i].innerHTML+"<br>")
}

document.write("<hr><h1>Usando um for para as tags (p).</h1><br>")
for(let i = 0; i < ps.length ; i++){
    document.write(ps[i].innerHTML+"<br>")
}

//Usando um for para procurar a tag p classe= titulo.
document.write("<hr><h1>Usando um for para procurar a tag p classe= titulo.</h1><br>")
psElementes = document.querySelectorAll("p.titulo")
for(let i = 0; i < psElementes.length ; i++){
    document.write(psElementes[i].innerHTML+"<br>")
}

document.write("<hr><h1>Usando um for para mudar a cor dos elementos da tag p dentro da div</h1><br>")
divPs = document.querySelectorAll("div > p")  // O * seleciona todos os elementos
for(let i = 0; i < divPs.length ; i++){
    divPs[i].style.color="#0a0";
}

document.write("<hr><h1>Usando um for para mudar a cor dos elementos da tag p dentro da div com uma classe</h1><br>")
divPsClasse = document.querySelectorAll("div.quadro > *")
for(let i = 0; i < divPsClasse.length ; i++){
    divPsClasse[i].style.color="#aa0";
}

//Para selecionar mais elementos basta encadealos(p,h1,h2)
divPsMaisElementos = document.querySelectorAll("p,h1,h2")
for(let i = 0; i < divPsMaisElementos.length ; i++){
    divPsMaisElementos[i].style.color="#aa0";
}