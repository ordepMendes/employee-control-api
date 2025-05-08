# API de controle de Funcionários

Esta API tem a finalidade de servir um projeto front-end desenvolvido em **React** com **TypeScript**, a API foi construida com **node**, **fastify** e **prisma**

### 🚀 Produção

![Badge em produção](http://img.shields.io/static/v1?label=STATUS&message=EM%20PRODUCAO&color=GREEN&style=for-the-badge)

a API esta hospedada no **railway** e voce pode acessa-la por esse link: 
Para acessar o projeto acesse o link: [<a href="https://employee-control-panel.vercel.app/">https://employee-control-panel.vercel.app/</a>](https://employee-control-api-production.up.railway.app/)

### 🖥️ Principais tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/pt)
- [Prisma](https://www.prisma.io/)
- [Fastify](https://fastify.dev/)

### ✅ Requisitos
- Node.js v18+

### 🌐 Endpoints

```bash
| Método | Rota                      | Descrição                         |
|--------|---------------------------|-----------------------------------|
| GET    | /list-employees           | Lista todos os usuários           |
| POST   | /add-employee             | Cria um novo usuário              |
| GET    | /list-employee?id=:id     | Lista um funcionario pelo id      |
| DELETE | /delete-employee?id=:id   | Remove um usuário                 |
```

### 📦 Rodando o projeto localmente

⚠️ É necessario colocar os arquivos do .env para rodar localmente ⚠️

Faça um clone do projeto
```bash
git clone https://github.com/ordepMendes/employee-control-api.git
```

Entre na pasta e no terminal rode o comando
```bash
# Este comando baixa as dependencias do projeto
npm install
```
Rode o comando npm build
```bash
# Vai rodar alguns comandos internos do prisma
npm run build
```
Para rodar o projeto
```bash
# Vai colocar a api no ar
npm run dev
```

### 🗄️ Banco de Dados

A API utiliza **MongoDB** como banco de dados não relacional.

### Conexão com o banco

A string de conexão é definida no arquivo `.env`:

```env
# Configure o arquivo .env com base no .env.example
# Exemplo de variáveis:
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco
```
