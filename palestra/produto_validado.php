<?php 
ini_set('display_errors', 1);

require '../conexao.php';

$id_produto = (isset($_GET['id'])) ? $_GET['id'] : '';

if (empty($id_produto)):
	echo '<h1>PRODUTO NÃO INFORMADO!</h1>';
else: 

	if (!is_numeric($id_produto)):
		echo '<h1>FORMATO INVÁLIDO!</h1>';
	else:
		$conexao = conexao::getInstance();
		$sql = "SELECT descricao FROM produtos WHERE id = :id_produto";
		$stm = $conexao->prepare($sql);
		$stm->bindValue(':id_produto', $id_produto);
		$stm->execute();
		$dados  = $stm->fetch(PDO::FETCH_OBJ);

		if(empty($dados)):
			echo '<h1>PRODUTO NÃO ENCONTRADO!</h1>';
		else:
			echo '<h1>DESCRIÇÃO: '.$dados->descricao.'</h1>';
		endif;
	endif;
endif;

// ; drop tables produtos;
// -> '; drop tables produtos;--'