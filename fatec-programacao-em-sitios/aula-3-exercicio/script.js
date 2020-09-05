window.addEventListener("load", addEnventos)

let returneMsg = document.getElementById('msg');
let dadoNome = document.getElementById('nome');
let situacaoNome = document.getElementById('rNome');
let dadoSexo = document.getElementById('operacao');
let situacaoSexo = document.getElementById('rOperacao');
let dadoCPF = document.getElementById('cpf');
let situacaoCPF = document.getElementById('rCpf');
let dadoIdade = document.getElementById('idade');
let situacaoIdade = document.getElementById('rIdade');
let status = document.getElementById('msg')
let styleError = "#f00"
let styleSucesso = "#0f0"
let stylePadrao = "#000"
var nome 
var genero
var cpf
var idade
var numberCpf
var cont
var stringCpf

//Reponsavel pela estilizaçao dos campos
function addEnventos()
{
    dadoNome.addEventListener("click",function(){   
        situacao(situacaoNome, stylePadrao )
        cor(dadoNome, stylePadrao);
        mensagem(situacaoNome,"Nome")

    })

    dadoSexo.addEventListener("click",function(){
        situacao(situacaoSexo, stylePadrao)
        cor(dadoSexo, stylePadrao)
        mensagem(situacaoSexo,"Genero")
    
    })

    dadoCPF.addEventListener("click",function(){
        situacao(situacaoCPF, stylePadrao)
        cor(dadoCPF, stylePadrao)
        mensagem(situacaoCPF,"CPF") 
      
    })

    dadoIdade.addEventListener("click",function(){
        situacao(situacaoIdade, stylePadrao)
        cor(dadoIdade, stylePadrao)
        mensagem(situacaoIdade,"Idade")
    
    })
}

// Responsavel pela chamada de funções validadoras
botao.addEventListener('click', function (){
    validaNome(dadoNome, situacaoNome)
    validaGenero(dadoSexo, situacaoSexo)
    validaCpf(dadoCPF.value, situacaoCPF)
    validaIdade(dadoIdade, situacaoIdade)
    calculadoraAposentadoria()
    

})

//Reponsavel pela validação do campo nome 
function validaNome(){

    if(dadoNome.value)
    {
        situacaoNome.style.color = styleSucesso
        cor(dadoNome, styleSucesso);
        nome = 1
        calculadoraAposentadoria()
      
    }else
    {
        mensagem(situacaoNome,'Digite o nome!') 
        situacao(situacaoNome, styleError)
        cor(dadoNome, styleError);
        nome = 0
    }
}

function validaGenero(){
    if(dadoSexo.value != 0){
        situacaoSexo.style.color = styleSucesso
        cor(dadoSexo, styleSucesso); 
        genero = 1
        calculadoraAposentadoria()
       
    }
    else
    {
        mensagem(situacaoSexo,'Informe o sexo!') 
        situacao(situacaoSexo, styleError)
        cor(dadoSexo, styleError);
        genero = 0
    }
}
// Validaçao modelo 1
function validaCpf()
{
    if(dadoCPF.value)
    {
        if(dadoCPF.value.length == 11)
        {
            if(isNaN(dadoCPF.value))
            {
                mensagem(situacaoCPF,'O CPF não deve conter letras ou caracteres!') 
                situacao(situacaoCPF, styleError)
                cor(dadoCPF, styleError);
                cpf = 0
            
            }
            else
            {
                // A regex \D+ pega tudo que não é número 
                // O split dividi a string em "pedaços" usando essa regex como delimitadora: ["5", "1", ""];
                //join, uni ela de novo numa string: "51";
                //parseInt interpreta a string num número (na base 10)

                numberCpf = parseInt(dadoCPF.value.split(/\D+/).join(""), 10)
                //Converte o valor numerico para string
                stringCpf = numberCpf.toString()
                if(stringCpf)
                {

                    if(stringCpf.length == 11)
                    {
                        situacaoCPF.style.color = styleSucesso
                        cor(dadoCPF, styleSucesso);
                        cpf = 1
                        calculadoraAposentadoria()
                    }
                    else
                    {
                        mensagem(situacaoCPF,'O CPF deve conter 11 números sem letras ou carateres!') 
                        situacao(situacaoCPF, styleError)
                        cor(dadoCPF, styleError);
                        cpf = 0
                    }
                }

            }
        }
        else
        {
            mensagem(situacaoCPF,'O CPF deve conter 11 números!') 
            situacao(situacaoCPF, styleError)
            cor(dadoCPF, styleError);
            cpf = 0
        }
    }
    else
    {
        mensagem(situacaoCPF,'Informe CPF!') 
        situacao(situacaoCPF, styleError)
        cor(dadoCPF, styleError);
        cpf = 0
    }
}


 //Validaçao modelo 2

/*function validaCpf()
{   
    // A regex \D+ pega tudo que não é número 
    // O split dividi a string em "pedaços" usando essa regex como delimitadora: ["5", "1", ""];
    //join, uni ela de novo numa string: "51";
    //parseInt interpreta a string num número (na base 10)

    numberCpf = parseInt(dadoCPF.value.split(/\D+/).join(""), 10)
    //Converte o valor numerico para string
    stringCpf = numberCpf.toString()
    if(stringCpf)
    {

        if(stringCpf.length == 11)
        {
            situacaoCPF.style.color = styleSucesso
            cor(dadoCPF, styleSucesso);
            cpf = 1
            calculadoraAposentadoria()
        }
        else
        {
            mensagem(situacaoCPF,'O CPF deve conter 11 números sem letras!' +numberCpf + "<br>"+stringCpf) 
            situacao(situacaoCPF, styleError)
            cor(dadoCPF, styleError);
            cpf = 0
        }

    }
    else
    {
        mensagem(situacaoCPF,'Informe CPF!') 
        situacao(situacaoCPF, styleError)
        cor(dadoCPF, styleError);
        cpf = 0
    }
}*/


function validaIdade()
{
    if(isNaN(dadoIdade.value))
    {
        mensagem(situacaoIdade,'Digite apenas numeros') 
        situacao(situacaoIdade, styleError)
        cor(dadoIdade, styleError);
        idade = 0

    }
    else
    {
        if(dadoIdade.value < 115 && dadoIdade.value > 0  )
        {
            situacaoIdade.style.color = styleSucesso
            cor(dadoIdade, styleSucesso); 
            idade = 1
            calculadoraAposentadoria()
        }
        else
        {
            mensagem(situacaoIdade,'Idade invalida:(') 
            situacao(situacaoIdade, styleError)
            cor(dadoIdade, styleError);
            idade = 0

        }

    }
}

function calculadoraAposentadoria()
{
    if(nome == 1 && genero == 1 && cpf == 1 && idade == 1)
    {
            if(dadoSexo.value == "f")
            {
                if(dadoIdade.value >= 60)
                {
                    mensagem(msg,'Parabéns '+dadoNome.value+' vocé jà pode Aposentar.') 
                    situacao(msg, styleSucesso)

                }else
                {
                    intIdade = parseInt(dadoIdade.value)
                    anosParaApo = 60 - intIdade
                    txtNome = dadoNome.value
                    mensagem(msg,'Desculpe '+txtNome+'<br>Ainda faltam '+ anosParaApo +" Anos para você se aposentar.") 
                    situacao(msg, styleError)

                }   
            }
            else
            {
                if(dadoIdade.value >= 65)
                {
                    mensagem(msg,'Parabéns '+dadoNome.value+' vocé jà pode Aposentar.') 
                    situacao(msg, styleSucesso)

                }else
                {
                    intIdade = parseInt(dadoIdade.value)
                    anosParaApo = 65 - intIdade
                    txtNome = dadoNome.value
                    mensagem(msg,'Desculpe '+txtNome+'<br>Ainda faltam '+ anosParaApo +" Anos para você se aposentar.") 
                    situacao(msg, styleError)


                }   

            }

    }
    else
    {
            mensagem(msg,'Cadastro incompleto:(') 
            situacao(msg, styleError)

    }
}

function mensagem(obj, msg){
    obj.innerHTML = msg
}

function situacao(obj, cor){
    obj.style.color = cor

}

function cor(obj, cor){
    obj.style.borderColor = cor

}

