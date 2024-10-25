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
