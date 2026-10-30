create database crud_usuarios;

use crud_usuarios;

create table usuarios(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(100) not null
);

select * from usuarios;

insert into usuarios(nome, email)
values
("Bruno", "bruno@uece.br"),
("Maria", "maria@uece.br");