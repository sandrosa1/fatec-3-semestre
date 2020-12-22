<?php 
ini_set('display_errors', 1);

require '../conexao.php';

$conexao = conexao::getInstance();
$sql = "SELECT * FROM produtos WHERE id = '".$_REQUEST['id']."'";
$result = $conexao->query($sql);
$dados  = $result->fetchAll(PDO::FETCH_OBJ);

if(empty($dados)):
	echo '<h1>PRODUTO NÃO ENCONTRADO!</h1>';
else:
	echo '<h1>DESCRIÇÃO: '.$dados[0]->descricao.'</h1>';
endif;

// '; drop tables produtos;--'