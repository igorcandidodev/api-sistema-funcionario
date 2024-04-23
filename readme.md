# Sistema de Funcionários

## Descrição
Se trata de uma API para um Sistema de gerenciamento de funcionários em uma empresa, onde teremos as entidades **Employee, Department, Role, Project, Supervisor e Task**, com os relacionamentos entre eles.

## Estrutura do projeto

### src/database/
Ficará as definições das tabelas que serão criadas no banco de dados. Após isso todas as tabelas criadas serão exportadas em um objeto **databases** através do arquivo **config.js**.

### src/router/
Ficará as definições de todas as rotas que serão expostas pela API. Após a definição da rota a mesma deve ser importada no arquivo **routes.js** e passada no objeto **routes**

### src/server.js
Arquivo principal da API contendo a definição dos middleware da API e a exportação das rotas.

## Tecnologias
1. NodeJS
2. ExpressJS
3. Sequelize
4. PostgreSQL

