

<h1 align="center">
     <a href="#" alt="site do ecoleta"> Sistema de pedidos </a>
</h1>

<h3 align="center">
    Projeto Web na plataforma .NET usando a linguagem C#, que deverá atender aos requisitos de um sistema de pedidos.
</h3>

## 💻 Sobre o projeto

Projeto desenvolvido para o processo seletivo Fortes Tecnologia na etapa de avaliação técnica.
Link com o vídeo do projeto: https://drive.google.com/drive/folders/1G3c057pqz6qRdTCpebi2omHISHXz9tz_?usp=sharing

---

## ⚙️ Funcionalidades

- [x] Fornecedores podem se cadastrar na plataforma web enviando as seguintes informações: Razão Social, CNPJ, UF, Email de Contato e Nome de Contato.
- [x] Fornecedores podem cadastrar, editar e excluir produtos com as seguintes informações: Código, Descrição, Data do Cadastro e Valor do Produto.
- [x] Podem ser feitos pedidos, no qual, a nível de banco deve conter as seguintes informações: Código do pedido, Data do pedido, Produto, Quantidade de Produtos, Fornecedor e Valor Total do Pedido.
- [x] Listagem dos pedidos por Fornecedor mostrando o valor total do pedido;
- [x] Listagem dos produtos por Fornecedor mostrando o valor total do pedido;
---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta SistemaPedidos) 
2. Frontend (pasta sistema-pedidos-front)

💡O Frontend necessita que o Backend esteja sendo executado para funcionar.

#### 🎲 Rodando o Backend 

```bash

# Clone este repositório
$ git clone https://github.com/alyssonmends/SistemaPedidos.git

# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta backend
$ cd backend

# Instale as dependências e execute a aplicação:
  1. Instalar VisualStudio2019
    1.1 Instalar no Gerenciador de Pacotes do NuGet:
      1.1.1 Microsoft.EntityFrameworkCore v5.0.17
      1.1.2 Microsoft.EntityFrameworkCore.Design v5.0.17
      1.1.3 Microsoft.EntityFrameworkCore.SqlServer v5.0.17
      1.1.4 Microsoft.EntityFrameworkCore.Tools v5.0.17
      1.1.5 Microsoft.VisualStudio.Web.CodeGeneration.Design v5.0.2
      1.1.6 Swashbuckle.AspNetCore v5.6.3
  2. Instalar SQLServerManagementStudio19
  3. String de conexão: Server=localhost;Database=DbSistemaPedidos;user=adm;password=123
  4. Executar o comando no VisualStudio => Console de Gerenciamento de Pacotes, para conectar no banco: Update-Database -Context SistemaPedidosContext

# O servidor inciará na porta:5001 - acesse http://localhost:5001 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/alyssonmends/SistemaPedidos.git

# Acesse a pasta do projeto no seu terminal/cmd

# Vá para a pasta da aplicação Front End
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Frontend**  
-   **React + Typescript**
-   **React Router Dom**
-   **React Icons**
-   **Axios**
-   **Styled Components**
-   **React-toastify**
-   **React table**
-   **Bootstrap**
-   **Reactstrap**
-   **React select**
-   **React-hook-form**
-   **Zod**
-   **Vite**   

#### **Backend**  
-   **ASP.Net Core**
-   **Entity Framework**
-   **Swagger/OpenAPI**


## 🦸 Autor

<a href="https://alysson.dev.br">
 <br />
 <sub><b>Alysson Mendes</b></sub></a> <a href="https://alysson.dev.br" title="Portfolio">🚀</a>
 <br />
---
