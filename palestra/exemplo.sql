CREATE DATABASE IF NOT EXISTS palestra;

USE palestra;

CREATE TABLE usuario_simples(
	id int auto_increment primary key,
	email varchar(100),
	senha varchar(10)
);

INSERT INTO usuario_simples(email, senha)VALUES('wllfl@ig.com.br', '123456');


CREATE TABLE usuario_md5(
	id int auto_increment primary key,
	email varchar(100),
	senha varchar(40)
);

INSERT INTO usuario_md5(email, senha)VALUES('wllfl@ig.com.br', md5('123456'));

use palestra;
CREATE TABLE produtos(
	id int auto_increment primary key,
	descricao varchar(100),
	unidade varchar(10),
	categoria varchar(100)
);

INSERT INTO produtos (descricao, unidade, categoria)VALUES('Produto 1', 'UND', 'categoria 1'),
														  ('Produto 2', 'UND', 'categoria 2'),
														  ('Produto 3', 'UND', 'categoria 3');

