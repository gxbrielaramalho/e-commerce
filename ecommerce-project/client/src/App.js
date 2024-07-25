import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu E-commerce!</h1>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              Início
            </li>
            <li className="nav-item">
              Sobre Nós
              <ul className="dropdown">
                <li><a href="#">História</a></li>
                <li><a href="#">Equipe</a></li>
                <li><a href="#">Missão</a></li>
              </ul>
            </li>
            <li className="nav-item">
              Produtos
              <ul className="dropdown">
                <li><a href="#">Produto 1</a></li>
                <li><a href="#">Produto 2</a></li>
                <li><a href="#">Produto 3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              Contato
              <ul className="dropdown">
                <li><a href="#">Email</a></li>
                <li><a href="#">Telefone</a></li>
                <li><a href="#">Formulário</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="products">
          <div className="product-item">Produto 1
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
          
          <div className="product-item">Produto 2
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
          <div className="product-item">Produto 3
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
          <div className="product-item">Produto 4
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
          <div className="product-item">Produto 5
            <p>Características do produto...</p>
            <h1>R$ 99,00</h1>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Meu E-commerce. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
