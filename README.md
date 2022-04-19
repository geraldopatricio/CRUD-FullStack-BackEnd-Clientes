<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
<p align="center">Projeto de um BackEnd usando o NestJs para uma base de Clientes em Mysql</p>
<p align="center">

## Technologias usadas neste projeto
<img src="./src/assets/img/technology.png" alt="Tecnologias usadas" /> 
  
## Objetivo
BackEnd usando NestJs com banco Mysql, disponível o swagger na raiz do projeto e o Json pra uso no Insomnia ou Postman.

## Instale o Pacote 
Caso tenha o Xampp instalado crie apenas o banco de nome: builders e execute os comandos abaixo:

```bash
$ npm install
# ou se tiver problemas com versões use
$ npm install --force
 
# ou usar o:
$ yarn install
  
```
  
## Rodar o app
```bash
$ npm run start:dev
$ npm run start
$ npm run start:prod
  
# ou usar o:
$ yarn build
$ yarn start:prod
```
  
## Caso tenha o Docker para montar a imagem use:
```bash
$ docker-compose up database_clientes dev
$ docker-compose database_clientes prod
# Caso precisar alterar o docker, basta alterar os arquivos da raiz:
  -> Dockerfile
  -> docker-compose.yml
```

## Para acesso à URL
http://localhost:8080/ ou http://localhost:3333/ se usar Docker
  
## Para acesso à URL Swagger
http://localhost:8080/api
  
## Swagger
swagger.json << Arquivo encontra-se na Raiz
<img src="./src/assets/img/swagger.jpg" alt="Swagger" /> 
  
## Banco de Dados
builders.sql << Arquivo encontra-se na pasta database
<img src="./src/assets/img/banco.jpg" alt="Banco" /> 
  
## Arquivo JSON parar usar no Insomnia ou Postman
Insomnia_2022-04-16.json << Arquivo encontra-se na Raiz
<img src="./src/assets/img/json.jpg" alt="Json" /> 

## Video Demo
<a href="https://youtu.be/HUl-Nuvemcw" target="_blank">Clique Aqui</a>

## Teste
```bash
$ npm run test
```

## Suporte

geraldo@gpsoft.com.br

## Sobre

- Author - [Geraldo P Melo](https://gpsoft.com.br)

