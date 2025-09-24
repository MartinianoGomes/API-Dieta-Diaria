# Daily Diet API

Uma API RESTful desenvolvida como projeto acadêmico para gerenciar dietas diárias dos usuários. Este projeto utiliza tecnologias modernas como Fastify, Knex.js, TypeScript e SQLite.

## 🚀 Tecnologias Utilizadas

- [Fastify](https://www.fastify.io/) - Framework web rápido e de baixo overhead
- [Knex.js](https://knexjs.org/) - Query builder SQL
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [SQLite](https://www.sqlite.org/) - Banco de dados relacional

## 📋 Funcionalidades

- Gerenciamento de Usuários
  - Criação de usuários
  - Métricas das refeições por usuário

- Gerenciamento de Refeições
  - Criar nova refeição
  - Listar todas as refeições de um usuário
  - Visualizar uma refeição específica
  - Atualizar refeição
  - Deletar refeição

## 🛠️ Rotas da API

### Usuários
- `POST /user` - Criar novo usuário
- `GET /user/:user_id/metrics` - Obter métricas do usuário

### Refeições
- `POST /meals` - Criar nova refeição
- `GET /user/meals/:user_id` - Listar todas as refeições de um usuário
- `GET /meals/:id` - Visualizar uma refeição específica
- `PUT /meals/:id/:user_id` - Atualizar uma refeição
- `DELETE /meals/:id/:user_id` - Deletar uma refeição

## 💻 Como executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Execute as migrações do banco de dados:
```bash
npm run knex -- migrate:latest
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 🗄️ Estrutura do Banco de Dados

### Tabela Users
- id (Primary Key)
- name
- email

### Tabela Meals
- id (Primary Key)
- name
- description
- is_diet (boolean)
- date
- user_id (Foreign Key -> Users)

## 📝 Licença

Este projeto está sob a licença ISC.

---

Desenvolvido como projeto acadêmico 🎓