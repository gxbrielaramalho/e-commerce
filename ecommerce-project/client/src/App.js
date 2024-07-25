import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu E-commerce!</h1>
      </header>
      <main>
        <div className="products">
          <div className="product-item">Produto 1
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
          
          <div className="product-item">Produto 2</div>
          <div className="product-item">Produto 3</div>
          <div className="product-item">Produto 4</div>
          <div className="product-item">Produto 5</div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Meu E-commerce. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
