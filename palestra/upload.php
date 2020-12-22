<?php

if(isset($_FILES['upload']) && $_FILES['upload']['size'] > 0):  

    $extensoes_aceitas = array('bmp' ,'png', 'svg', 'jpeg', 'jpg');
    $extensao = explode('.', $_FILES['upload']['name']);
    $extensao = end($extensao);

    if (array_search($extensao, $extensoes_aceitas) === false):
       echo "<h1>Extensão Inválida!</h1>";
       exit;
    endif;

	  if(!file_exists("img/")):  
       mkdir("img");  
    endif; 

    $caminho = "img/" . $_FILES['upload']['name']; 
   
  	if (move_uploaded_file($_FILES['upload']['tmp_name'], $caminho)):  
       echo "Arquivo enviado com sucesso!";  
  	else:  
       echo "Houve um erro ao gravar arquivo na pasta de destino!";  
 	endif;  
  
endif;  