# :checkered_flag: PIPOCA.COM

Um site simples para divulgar sessões de filmes de um cinema além dos filmes que já passaram por este cinema

## :technologist: Membros da equipe

473618, Evynne Ferreira Avelino, Engenharia de Software.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não logado
- Funcionário
- Administrador

Informe aqui os tipos de usuário que irão interagir com a aplicação. Ex: administrador, locador, locatario, usuário não logado.

> Tenha em mente que obrigatoriamente a aplicação deve possuir funcionalidades acessíveis a todos os tipos de usuário e outra funcionalidades restritas a certos tipos de usuários.

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Filme
- Comentário
- Sessão

## :triangular_flag_on_post: Principais funcionalidades da aplicação

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.

- Um usuário não logado pode ver os filmes que estão em cartaz e os filmes que já estiveram em cartaz
- Funcionário pode ver o que o usuário não logado vê, além de poder gerênciar as sessões que estão disponíveis no cinema
- O administrador pode fazer o que os papéis acima fazem, além de também poder gerênciar os filmes do site.

## :Entradas do banco para teste

STRAPI evynne@mail.com Senha: Admin123456

ADMIN email: sauro@mail.com Senha: 123qwe
FUNCIONARIO email: cinemax@gmail.com Senha: 123qwe

---

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:

---

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

- VueJS v3.0, Vue-Router e Pinia.
- Axios

**Backend:**

- Strapi

## :shipit: Operações implementadas para cada entidade da aplicação

| Entidade   | Criação | Leitura | Atualização | Remoção |
| ---------- | ------- | ------- | ----------- | ------- |
| Usuário    |         |         |             |         |
| Filme      | X       | X       | X           | X       |
| Sessão     | X       | X       | X           | X       |
| Comentário |         |         |             |         |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL           |
| ----------- | ------------- |
| GET         | api/movies/   |
| POST        | api/movies    |
| PUT         | api/movies/   |
| DELETE      | api/movies/   |
| GET         | api/sessions/ |
| POST        | api/sessions  |
| PUT         | api/sessions/ |
| DELETE      | api/sessions/ |
