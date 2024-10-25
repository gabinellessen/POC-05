# POC-05
 Danilo Gigliotti RA 10443431 e Gabriela Nellessen RA 

Esta POC tem como objetivo explicar o funcionamento dos seguintes conceitos de REACT, usando Next.js:
-Estrutura de Projeto NextJS 14 ou superior
-Criação de componentes simples (sem estado)
-Estilo CSS (global e módulo). 

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

    <pre>
<code>
my-nextjs-app/
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
</code>
    </pre>

    <h3>Principais Diretórios</h3>
    <ul>
        <li><strong>app/</strong>: Contém a estrutura de páginas e componentes da aplicação.</li>
        <li><strong>public/</strong>: Armazena arquivos estáticos, como imagens.</li>
        <li><strong>styles/</strong>: Local onde você pode colocar arquivos CSS globais e módulos CSS.</li>
    </ul>

    <h2>Criação de Componentes Simples (sem estado)</h2>

    <h3>Exemplo: Componente de Card</h3>
    <p>Vamos criar um componente que exibe informações sobre um produto, chamado <code>Card</code>.</p>

    <p>Crie um arquivo chamado <code>Card.js</code> dentro da pasta <code>app/components/</code>:</p>

    <pre>
<code>
// app/components/Card.js
import styles from '../styles/Card.module.css';

export default function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
</code>
    </pre>

    <h3>Utilização do Componente</h3>
    <p>Você pode usar o componente <code>Card</code> em uma página:</p>

    <pre>
<code>
// app/page.js
import Card from './components/Card';

export default function HomePage() {
  return (
    <main>
      <h1>Catálogo de Produtos</h1>
      <Card title="Produto A" description="Descrição do Produto A." />
      <Card title="Produto B" description="Descrição do Produto B." />
    </main>
  );
}
</code>
    </pre>

    <h2>Estilo CSS (global e módulo)</h2>

    <h3>CSS Global</h3>
    <p>Para aplicar estilos globais, crie um arquivo chamado <code>globals.css</code> na pasta <code>styles/</code>:</p>

    <pre>
<code>
/* styles/globals.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
  text-align: center;
}
</code>
    </pre>

    <p>Para usar os estilos globais, importe o arquivo no arquivo <code>layout.js</code>:</p>

    <pre>
<code>
// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
</code>
    </pre>

    <h3>CSS Módulo</h3>
    <p>Para estilizar o componente <code>Card</code>, crie um arquivo CSS chamado <code>Card.module.css</code>:</p>

    <pre>
<code>
/* styles/Card.module.css */
.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card h2 {
  color: #0070f3;
}
</code>
    </pre>

    <h3>Aplicando CSS Módulo</h3>
    <p>O CSS módulo já está importado no componente <code>Card</code>, então as classes serão aplicadas automaticamente.</p>

    <h2>Conclusão</h2>
    <p>Neste guia, apresentamos uma estrutura básica de projeto Next.js 14, a criação de componentes simples e a aplicação de estilos globais e em módulos. Sinta-se à vontade para explorar e expandir este projeto conforme suas necessidades!</p>

</body>
</html>
