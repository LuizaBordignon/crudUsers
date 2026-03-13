<h1>👥 CRUD Users</h1><p align="left">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js">
  <img src="https://img.shields.io/badge/React-Frontend-blue?logo=react">
  <img src="https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql">
  <img src="https://img.shields.io/badge/Status-Active-success">
</p><hr><h2>📖 Sobre o Projeto</h2><p>
Este projeto é uma aplicação full stack para gerenciamento de usuários.
</p><p>
O sistema permite cadastrar, visualizar, editar e remover usuários através de uma interface web.
O frontend foi desenvolvido em React, enquanto o backend foi implementado em Node.js, realizando a comunicação com um banco de dados PostgreSQL.
</p><hr><h2>🧠 Arquitetura</h2><ul>
<li>Frontend: React</li>
<li>Backend: Node.js</li>
<li>API REST para comunicação entre frontend e backend</li>
<li>Banco de dados PostgreSQL</li>
</ul><hr><h2>⚙️ Tecnologias Utilizadas</h2><p>⚛️ React</p>
<p>🟢 Node.js</p>
<p>🐘 PostgreSQL</p>
<p>🔗 REST API</p><hr><h2>🚀 Funcionalidades</h2><ul>
<li>➕ Criar usuários</li>
<li>📋 Listar usuários cadastrados</li>
<li>✏️ Editar informações de usuários</li>
<li>❌ Remover usuários</li>
<li>💾 Persistência de dados no PostgreSQL</li>
</ul><hr><h2>📁 Estrutura do Projeto</h2><pre>
crudUsers
│
├── backend
│   ├── server.js
│   ├── routes
│   ├── controllers
│   └── database
│
├── frontend
│   ├── src
│   ├── components
│   └── pages
│
└── README.md
</pre><hr><h2>📦 Instalação</h2><p>Clone o repositório:</p><pre>
git clone https://github.com/LuizaBordignon/crudUsers.git
</pre><p>Entre na pasta do projeto:</p><pre>
cd crudUsers
</pre><hr><h2>⚙️ Executando o Backend</h2><pre>
cd backend
npm install
npm start
</pre><hr><h2>⚛️ Executando o Frontend</h2><pre>
cd frontend
npm install
npm start
</pre><hr><h2>🗄 Banco de Dados</h2><p>Exemplo de estrutura da tabela de usuários:</p><pre>
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
</pre><hr><h2>🎯 Objetivo</h2><p>
Este projeto foi desenvolvido com o objetivo de praticar o desenvolvimento de aplicações full stack utilizando React no frontend, Node.js no backend e PostgreSQL como banco de dados.
</p>