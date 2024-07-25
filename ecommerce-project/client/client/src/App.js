import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu primeiro E-commerce!</h1>
        <p>Em construção...</p>
      </header>
      <main>
        <div className="products">
          <h2>Produtos</h2>
          <div className="product-item">
            <h3>Produto 1</h3>
            <p>Descrição do produto 1.</p>
          </div>
          <div className="product-item">
            <h3>Produto 2</h3>
            <p>Descrição do produto 2.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
