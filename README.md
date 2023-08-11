# :checkered_flag: PIPOCA.COM

Um site simples de venda ingressos para um cinema.

## :technologist: Membros da equipe

473618, Evynne Ferreira Avelino, Engenharia de Software.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário logado
- Usuário não logado
- Administrador

Informe aqui os tipos de usuário que irão interagir com a aplicação. Ex: administrador, locador, locatario, usuário não logado.

> Tenha em mente que obrigatoriamente a aplicação deve possuir funcionalidades acessíveis a todos os tipos de usuário e outra funcionalidades restritas a certos tipos de usuários.

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Filme
- Ingresso
- Comentário
- Sessão

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.

- O usuário logado poderá comprar um ingresso.
- O usuário logado e o não logado poderão ver a lista de filmes disponíveis, os detalhes de cada filme e ver se têm ingressos disponíveis.
- O administrador poderá adicionar, remover, editar e deletar sessões e filmes.

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário |  |    |  |  |
| Filme | X |  X  |  X | X |
| Sessão | X |  X  | X | X |
| Ingresso |  |    |  |  |
| Comentário | X | X   | X | X |


> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |
