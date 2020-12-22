<?php
// https://web.microsoftstream.com/video/a3d91e6e-e5ee-4e92-b7b3-82e110f21524

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json; charset=UTF-8');

$uri = basename($_SERVER['REQUEST_URI']);

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    echo json_encode(['mensagem'=> 'Recebido com sucesso !']);
}
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $nome = (isset($_POST['nome'])) ? $_POST['nome'] : '';
    if(empty($nome)){
        echo json_encode(['mensagem'=> 'Infome seu nome !']);
        http_response_code(406);
    }
    else
    {
        echo json_encode(['mensagem'=> "Você informou o nome  . $nome"]);
    }
}

if($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    parse_str(file_get_contents('php://input'), $_PUT);

    $codigo = (isset($_PUT['codigo'])) ? $_PUT['codigo'] : '';
    $email = (isset($_PUT['email'])) ? $_PUT['email'] : '';

    if(empty($codigo) || empty($email))
    {
        echo json_encode(['mensagem'=> 'Infome seu Código e E-mail !']);
        http_response_code(406);
    }
    else
    {
        echo json_encode(['mensagem'=> "Você informou o código $codigo  e o email $email"]);
        http_response_code(202);
    }
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE')
{

    if(is_numeric($uri))
    {
        echo json_encode(['mensagem'=> "Você informou seu Código $uri"]);
        http_response_code(202);
    }
    else
    {
        echo json_encode(['mensagem'=> 'Informe seu código !']);
        http_response_code(406);
    }
}




    
