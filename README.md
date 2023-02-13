## Instrução para rodar os containers

> docker-compose up -d
>
> Com os containers rodando, vá até a url localhost:8080 usando um browser

## Observações

- Como não interfere no resultado final e não era um requisito, optei por não utilizar um volume externo no db por problemas referentes a permissão e bloqueio da pasta ao testar no Windows.
- Optei por incorporar a instrução SQL de criação da tabela ao conectar usando o IF NOT EXISTS para garantir que a tabela fosse incluída uma única vez
- Optei por incluir o nome na tabela people a cada request para que a lista fosse crescendo a cada request

## Detalhes do desafio

> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
>
> O retorno da aplicação node.js para o nginx deverá ser:
>
> `<h1>Full Cycle Rocks!</h1>`
>
> - Lista de nomes cadastrada no banco de dados.
>
> Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
>
> Suba tudo em um repositório e faça a entrega.
>
> - A linguagem de programação para este desafio é Node/JavaScript.
