import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu E-commerce</h1>
        <p>Explore nossa seleção de produtos exclusivos e descubra a qualidade que oferecemos.</p>
        <div className="navbar">
          <ul>
            <li className="nav-item">Início</li>
            <li className="nav-item">
              Sobre Nós
              <ul className="dropdown">
                <li><a href="#history">Nossa História</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><a href="#values">Valores</a></li>
              </ul>
            </li>
            <li className="nav-item">Produtos</li>
            <li className="nav-item">Contato</li>
          </ul>
        </div>
      </header>
      <main>
        <section className="intro">
          <h2>Sobre o Nosso Projeto</h2>
          <p>Somos uma empresa dedicada a oferecer os melhores produtos com o melhor atendimento. Nossa missão é garantir a satisfação total dos nossos clientes, oferecendo produtos de alta qualidade e um serviço excepcional.</p>
        </section>
        <section className="products">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>Descrição breve do produto 1. Ideal para suas necessidades diárias.</p>
            <h2>R$ 99,00</h2>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 2" />
            <h3>Produto 2</h3>
            <p>Descrição breve do produto 2. Perfeito para quem busca qualidade.</p>
            <h2>R$ 149,00</h2>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 3" />
            <h3>Produto 3</h3>
            <p>Descrição breve do produto 3. Feito para durar.</p>
            <h2>R$ 199,00</h2>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 4" />
            <h3>Produto 4</h3>
            <p>Descrição breve do produto 4. Ideal para presentes.</p>
            <h2>R$ 249,00</h2>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 5" />
            <h3>Produto 5</h3>
            <p>Descrição breve do produto 5. Qualidade e estilo.</p>
            <h2>R$ 299,00</h2>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Produto 5" />
            <h3>Produto 5</h3>
            <p>Descrição breve do produto 5. Qualidade e estilo.</p>
            <h2>R$ 299,00</h2>
          </div>
        </section>
        <section className="additional-info">
          <img src="https://via.placeholder.com/600x400" alt="Informações Adicionais" />
          <p>Aqui você encontra mais informações sobre nossos produtos e serviços. Estamos comprometidos com a qualidade e a satisfação dos nossos clientes.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Meu E-commerce. Todos os direitos reservados.</p>
        <p>Contato: <a href="mailto:contato@meuecommerce.com">contato@meuecommerce.com</a></p>
      </footer>
    </div>
  );
}

export default App;
