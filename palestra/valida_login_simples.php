<?php
ini_set('display_errors', 1);
session_start();

require '../conexao.php';

$conexao = conexao::getInstance();
$sql = "SELECT * FROM usuario_simples WHERE email = '".$_REQUEST['email']."' AND senha= '".$_REQUEST['senha']."'";
$result = $conexao->query($sql);
$dados  = $result->fetchAll(PDO::FETCH_OBJ);

if (empty($dados)):
	echo '<h1>USUÁRIO OU SENHA INVÁLIDOS!</h1>';
else:
	$_SESSION['id'] 		= $dados[0]->id;
	$_SESSION['email'] 		= $dados[0]->email;

	echo '<h1>LOGADO COM SUCESSO!</h1>';
endif;

// ' OR 1=1 #