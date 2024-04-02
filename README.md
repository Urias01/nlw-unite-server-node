# pass.in

O pass.in é uma aplicação de **gestão de partiipantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos poem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve porder visualizar dados de um evento;
- [ ] O organizador deve poder visualizar a lista de participantes;
- [ ] O participante deve poder se inscrever em um evento;
- [ ] O participante deve poder visualizar seu crachá de inscrição;
- [ ] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ] O check-in no evento será realizado artavés de um QRCode;


## Anotações

Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTION, ...

Corpo da requisição (Request Body)
Parâmetros de busca (Search Params, Query Params) `http://localhost:3333/users?name=John`
Parâmetros de rota (Route Params) -> Identificação de recusos `DELETE http://localhost:3333/users/5`
Cabeçalhos (Headers) -> Contexto

Semânticas = Significado 

Driver nativo / Query Builders / ORMs

Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)

 JSON - Javascript Object Notation

 20x => Sucess
 30x => Redirect
 40x => Client Error (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
 50x => Server Error (Erro que esta acontecendo INDEPENTENDE do que esta sendo enviado para o servidor)
