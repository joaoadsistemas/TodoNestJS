# Projeto TODO em NestJS 📝
Um projeto em NestJS para gerenciar tarefas (TODO). Este projeto serve como exemplo de uma API RESTful com operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) para manipulação de tarefas.

## Como Usar 🚀
Para utilizar a aplicação, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/joaoadsistemas/TodoNestJS
   ```
   
2. Navegue até a pasta do projeto:
   ```bash
   cd seu-repositorio-todo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

5. Acesse a API em: http://localhost:3000/api/v1/todos

6. Acesso o Swagger em: http://localhost:3000/swagger

## Recursos Principais 📋
* **Listar todas as tarefas: GET /api/v1/todos**
* **Exibir os dados de uma tarefa: GET /api/v1/todos/:id**
* **Criar uma nova tarefa: POST /api/v1/todos**
* **Atualizar os dados de uma tarefa: PUT /api/v1/todos/:id**
* **Deletar uma tarefa: DELETE /api/v1/todos/:id**


## Estrutura do Projeto 🏗️
* **src/main.ts:** Ponto de entrada da aplicação.
* **src/app.module.ts:** Módulo principal da aplicação, configurando o TypeORM para conexão com o banco de dados.
* **src/app/todo/:** Módulo responsável por todas as operações relacionadas a tarefas.
* **todo.controller.ts:** Controlador que lida com as requisições HTTP relacionadas a tarefas.
* **todo.service.ts:** Serviço que contém a lógica de negócios para manipulação de tarefas.
* **todo.entity.ts:** Entidade que representa uma tarefa no banco de dados.
* **dto/:** Pasta contendo os objetos de transferência de dados (DTO) para criar e atualizar tarefas.
* **swagger/:** Pasta contendo as definições Swagger para documentação da API.

## Tecnologias Utilizadas 🛠️
* **NestJS:** Framework Node.js para construção de aplicativos eficientes e escaláveis.
* **TypeORM:** ORM (Object-Relational Mapping) para manipulação do banco de dados.
* **Swagger:** Ferramenta para documentação e visualização interativa da API.
* **Jest e Supertest:** Ferramentas para teste unitário e de integração.
  
## Contribuição 🤝
Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para criar um fork e enviar uma solicitação pull.

## Licença 📜
Este projeto está sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
