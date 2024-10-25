
# POC-05
## Danilo Gigliotti RA 10443431 e Gabriela Nellessen RA 10441930

Esta POC tem como objetivo explicar o funcionamento dos seguintes conceitos de React, usando Next.js:
- Estrutura de Projeto NextJS 14 ou superior
- Criação de componentes simples (sem estado)
- Estilo CSS (global e módulo)

### Estrutura de Projeto NextJS 14

Ao criar um novo projeto Next.js, a estrutura de diretórios geralmente se parece com isto:

```plaintext
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
```

**Principais Diretórios:**

- `app/`: Contém a estrutura de páginas e componentes da aplicação.
- `public/`: Armazena arquivos estáticos, como imagens.
- `styles/`: Local onde você pode colocar arquivos CSS globais e módulos CSS.

### Criação de Componentes Simples (sem estado)

#### Exemplo: Componente de Card
Vamos criar um componente que exibe informações sobre um produto, chamado **Card**.

Crie um arquivo chamado `Card.js` dentro da pasta `app/components/`:

```javascript
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
```

#### Utilização do Componente
Você pode usar o componente **Card** em uma página:

```javascript
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
```

### Estilo CSS (global e módulo)

#### CSS Global
Para aplicar estilos globais, crie um arquivo chamado `globals.css` na pasta `styles/`:

```css
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
```

Para usar os estilos globais, importe o arquivo no arquivo `layout.js`:

```javascript
// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

#### CSS Módulo
Para estilizar o componente **Card**, crie um arquivo CSS chamado `Card.module.css`:

```css
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
```

O CSS módulo já está importado no componente **Card**, então as classes serão aplicadas automaticamente.

### Conclusão
Neste guia, apresentamos uma estrutura básica de projeto Next.js 14, a criação de componentes simples e a aplicação de estilos globais e em módulos. Sinta-se à vontade para explorar e expandir este projeto conforme suas necessidades!
```
