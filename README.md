# Trybesmith

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />
  
## :page_with_curl: About

This is the seventh project of the Back-end curriculum developed at Trybe.

In this project I developed a RESTful API for sales of a medieval items store in TypeScript, where it is possible to perform basic operations on a database: Create, Read, Update and Delete. Authentication was done with JSON Web Token.

<br />
  
## 🚀 Installation

<details>
<summary>Installing and running with Docker</summary>
<br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be version **1.29** or higher.

### 1 - Clone the repository:

```
git clone git@github.com:apoishi/trybe-trybesmith.git
```

### 2 - Enter the repository folder you just cloned and use docker-compose to upload the container:

     cd trybe-trybesmith
     docker-compose up -d --build
  
### 3 - Run the SQL script to create the database
Connect to the MySQL server running on port 3306, and enter the following credentials:

host: db
  
user: root
  
password: password
  
Go to the MySQL client of your preference, and run the script that is in the Trybesmith.sql file.

### 4 - Open the `trybesmith` container terminal.

     docker exec -it trybesmith bash

### 5 - In the terminal of the container, install the dependencies with the command:

     npm install

### 6 - Run the application with the command:
    
     npm run dev
  
* I used Thunder Client as a client for HTTP requests and MySQLWorkbench as a MySQL client*
  
</details>
<br />

## :man_technologist: Skills

- Declare and use Typescript typings for variables and functions;
- Use Express with Typescript;

<br />

## 🚂 Routes
  
### Login
  
  <details>
   <summary><strong>POST /login</strong></summary>
   </br>
   • If the login was successful, it returns a token to the user.
</details>


### Order
  
<details>
   <summary><strong>POST /order</strong></summary>
   </br>
   • Register a new order.
</details>

<details>
   <summary><strong>GET /order</strong></summary>
   </br>
   • Return all orders.
   
   • Validate the token.  
</details>

### Product
  
<details>
   <summary><strong>POST /product</strong></summary>
   </br>
   • Register a new product.
</details>

<details>
   <summary><strong>GET /product</strong></summary>
   </br>
   • Return all products.
   
</details>


### User
  
<details>
   <summary><strong>POST /user</strong></summary>
   </br>
   • Register a new user in the database.
</details>

<br />

## :hammer_and_wrench: Tools

* Node
* Express
* Sequelize
* Json Web Tokens
* Joi
* Docker
* MySQL
* TypeScript

</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />
  
## :page_with_curl: Sobre

Esse é o sétimo projeto desenvolvido na Trybe do módulo de Back-end.

Nesse projeto desenvolvi uma API RESTful de vendas de uma loja de itens medievais em TypeScript, onde é possivel realizar as operações básicas em um banco de dados: Criar, Ler, Atualizar e Deletar (CRUD). A autenticação  foi feita com JSON Web Token.
  
<br />

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar esta aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:apoishi/trybe-trybesmith.git
```

### 2 - Entre na pasta do repositório que você acabou de clonar e use o docker-compose para subir o container:

    cd trybe-trybesmith   
    docker-compose up -d --build
  
### 3 - Execute o script SQL para criar o banco de dados
Conecte-se ao servidor MySQL rodando na porta 3306. Utilize as seguintes credenciais:

host: db
  
user: root
  
password: password
  
No cliente MySQL de sua preferência, rode o script que está no arquivo Trybesmith.sql.

### 4 - Abra o terminal do container `trybesmith`.

    docker exec -it trybesmith bash

### 5 - No terminal do container, instale as dependências com o comando:

    npm install

### 6 -  Execute a aplicação com o comando:
    
    npm run dev
  
  * Utilizei o Thunder Client como cliente de requisições HTTP e o MySQLWorkbench como cliente MySQL*

    
</details>
<br />

## :man_technologist: Habilidades

- Declarar e utilizar as tipagens do Typescript para variáveis e funções;
- Utilizar Express com Typescript;

<br />

## 🚂 Rotas

  
### Login
  
  <details>
   <summary><strong>POST /login</strong></summary>
   </br>
   • Caso o login tenha sido efetuado com sucesso retorna o token para o usuário.
</details>


### Order
  
<details>
   <summary><strong>POST /order</strong></summary>
   </br>
   • Cadastra um novo pedido.
</details>

<details>
   <summary><strong>GET /order</strong></summary>
   </br>
   • Retorna todos os pedidos.
   
   • Faz a validação do token.  
</details>

### Product
  
<details>
   <summary><strong>POST /product</strong></summary>
   </br>
   • Cadastra um novo produto.
</details>

<details>
   <summary><strong>GET /product</strong></summary>
   </br>
   • Retorna todos os produtos.
   
</details>


### User
  
<details>
   <summary><strong>POST /user</strong></summary>
   </br>
   • Cadastra um novo usuário no banco de dados.
</details>

<br />

## :hammer_and_wrench: Ferramentas

* Node
* Express
* Sequelize
* Json Web Tokens
* Joi
* Docker
* MySQL
* TypeScript

</details>
