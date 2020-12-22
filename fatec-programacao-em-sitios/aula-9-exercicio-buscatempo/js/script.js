cadastrar.addEventListener('click',function () {
    if(!cidadeRequerida.value) alert("Digite a cidade")
    else{
        buscaCodigo(cidadeRequerida.value)
        function buscaCodigo(obj) { 
            fetch('https://api.hgbrasil.com/stats/find_woeid?key=17284dd0&format=json-cors&sdk_version=console&city_name='+ obj)
                .then(response => response.json())
                .then(json => {
                    cidadeRequerida.value = ""
                    console.log(json.woeid)
                    if(json.woeid) buscaTemp(json.woeid)
                    else alert("CIDADE NAO ENCONTRADA")
                })
        }

        function buscaTemp(obj){
            fetch('https://api.hgbrasil.com/weather/?format=json-cors&key=development&woeid='+obj )
                .then(response => response.json())
                .then(json => {
                printTela(json.results) //RESUSLTS EH O NOME DO ARRAY CONSUMIDO
                })
        }
    
        function printTela(obj){
            objet = obj
            texto = '<h6>'+objet.city+' | Agora é '+ objet.currently +'<h6><br><h6>Nascer do sol:'+objet.sunrise+
                    ' | Por do sol: '+ objet.sunset +'<h6><br><h6>Temperatura: '+objet.temp+'°C | Umidade do ar: '+
                     objet.humidity +'%<h6><br><h6>'+objet.description+'<h6><br>' 
            let imagem = objet.img_id 
            document.getElementById("descricao").innerHTML = texto
            document.getElementById('tempo').innerHTML =  '<img class="rounded" src="http://assets.api.hgbrasil.com/weather/images/'+imagem+'.png" alt=""/>'; 
            for(i = 0; i < 6; i++){
                document.getElementById('tempo'+[i]).innerHTML =  '<p>'+objet.forecast[i].weekday+
                ' Dia '+objet.forecast[i].date+'</p><br><p>Previsão:'+objet.forecast[i].description+'</p><br><p>MIN: '
                +objet.forecast[i].min+'°C -MAX: '+objet.forecast[i].max+'°C</p>';    
            }   
        }
    }   
})