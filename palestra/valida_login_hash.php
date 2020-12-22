<?php
ini_set('display_errors', 1);
session_start();

require '../conexao.php';

$email = (isset($_POST['email'])) ? filter_var($_POST['email'],FILTER_SANITIZE_EMAIL): '';
$senha = (isset($_POST['senha'])) ? $_POST['senha'] : '';

if (empty($email) || empty($senha)):
	echo '<h1>INFORMAR USUÁRIO E SENHA!</h1>';
else:

	if(filter_var($email, FILTER_VALIDATE_EMAIL)):

		try{

			$conexao = conexao::getInstance();
			$sql = 'SELECT id, email, senha FROM usuario_hash WHERE email = :email LIMIT 1';
			$stm = $conexao->prepare($sql);
			$stm->bindValue(':email', $email);
			$stm->execute();
			$dados = $stm->fetch(PDO::FETCH_OBJ);

			if (!empty($dados) && password_verify($senha, $dados->senha)):
				$_SESSION['id']    = base64_encode($dados->id);
				$_SESSION['email'] = base64_encode($dados->email);
				echo '<h1>LOGADO COM SUCESSO!</h1>';
			else:
				echo '<h1>USUÁRIO OU SENHA INVÁLIDOS!</h1>';
			endif;

		}catch(Exception $erro){
			echo '<h1>ERRO AO VALIDAR USUÁRIO E SENHA!</h1>';
		}

	else:
		echo '<h1>FORMATO DO E-MAIL INVÁLIDO!</h1>';
	endif;

endif;