<!DOCTYPE html>
<html>
<head>
	<title>Exemplo 3</title>
	<style type="text/css">
	fieldset{
		width: 300px;
		min-height: 100px;
		margin: 0 auto;
	}
	</style>
</head>
<body>

	<fieldset>
		<legend>Upload de Arquivos</legend>
		<form method="post" action="upload.php" enctype="multipart/form-data">
		   <label>Informar o arquivo</label>
           <input type="file" name="upload"/>
           <input type="submit" name="Enviar" value="Enviar">
		</form>
	</fieldset>
</body>
</html>