## POC-05 
# Danilo Gigliotti RA 10443431 e Gabriela Nellessen RA 10441930

Esta POC tem como objetivo explicar o funcionamento dos seguintes conceitos de REACT, usando Next.js:

- Estrutura de Projeto NextJS 14 ou superior
- Criação de componentes simples (sem estado)
- Estilo CSS (global e módulo).

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia de Next.js 14</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eaeaea;
            padding: 5px;
            border-radius: 5px;
        }
        pre {
            background-color: #eaeaea;
            padding: 10px;
            border-radius: 5px;
            overflow: auto;
        }
    </style>
</head>
<body>
    <h1>Guia de Next.js 14: Estrutura de Projeto, Componentes e Estilos</h1>
    <p>Este repositório contém um exemplo básico de como estruturar um projeto utilizando Next.js 14 ou superior, além de explicar a criação de componentes simples e a aplicação de estilos em CSS, tanto globais quanto em módulos.</p>
    <h2>Estrutura de Projeto Next.js 14</h2>
    <p>Ao criar um novo projeto Next.js, a estrutura de diretórios geralmente se parece com isto:</p>
    <pre><code>my-nextjs-app/
├── app/
│   ├── page.js
│   ├── layout.js
│   └── components/
│       ├── Card.js
│       └── Header.js
├── public/
│   └── images/
├── styles/
│   ├── globals.css
│   └── Card.module.css
├── package.json
├── next.config.js
└── ...
</code></pre>
    <h3>Principais Diretórios</h3>
    <ul>
        <li><strong>app/</strong>: Contém a estrutura de páginas e componentes da aplicação.</li>
        <li><strong>public/</strong>: Armazena arquivos estáticos, como imagens.</li>
        <li><strong>styles/</strong>: Local onde você pode colocar arquivos CSS globais e módulos CSS.</li>
    </ul>
    <h2>Criação de Componentes Simples (sem estado)</h2>
    <h3>Exemplo: Componente de Card</h3>
    <p>Vamos criar um componente que exibe informações sobre um produto, chamado <code>Card</code>.</p>
    <p>Cr
