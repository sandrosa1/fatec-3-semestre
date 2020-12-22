<?php
ini_set('display_errors', 1);

getDiretorios();

function getDiretorios(){
	$ponteiro  = opendir(getcwd());
	echo getcwd()  . '<br>';

	while ($nome_itens = readdir($ponteiro)):
	    echo $nome_itens . '<br>';

	    if ($nome_itens == '..'):
	    	chdir('../');
	    	$dh  = opendir(getcwd());
	    	
			while (false !== ($filename = readdir($dh))):
			    echo $filename . '<br>';
			endwhile;

	    	getDiretorios();
	    endif;

	endwhile;	
}
