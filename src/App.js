import React from 'react'
import './App.css';

function App() {
  return (
    <div>
      <div>
        {/* Navigation */}
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="https://israelcena.com.br">Restaurante da esquina</a>
            <a className="btn btn-primary" href="https://israelcena.com.br">Logar</a>
          </div>
        </nav>
        {/* Masthead */}
        <header className="masthead text-white text-center">
          <div className="overlay"/>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Trabalhando para alimentar a sua fome com qualidade e transparencia!</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="O que você gostaria de comer ?"/>
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Buscar!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        
        {/* Image Showcases */}
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                backgroundImage: 'url("img/bg-showcase-1.jpg")'
              }}/>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Fully Responsive Design</h2>
                <p className="lead mb-0">When you use a theme created by Start Bootstrap, you
                  know that the theme will look great on any device, whether it's a phone, tablet,
                  or desktop the page will behave responsively!</p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{
                backgroundImage: 'url("img/bg-showcase-2.jpg")'
              }}/>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Updated For Bootstrap 4</h2>
                <p className="lead mb-0">Newly improved, and full of great utility classes,
                  Bootstrap 4 is leading the way in mobile responsive web development! All of the
                  themes on Start Bootstrap are now using Bootstrap 4!</p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                backgroundImage: 'url("img/bg-showcase-3.jpg")'
              }}/>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use &amp; Customize</h2>
                <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS
                  for users who demand some deeper customization options. Out of the box, just add
                  your content and images, and your new landing page will be ready to go!</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">O que as pessoas falam sobre nós?</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="./img/testimonials-1.jpg"
                    alt="Testemunho"/>
                  <h5>Sonia Escobar</h5>
                  <p className="font-weight-light mb-0">"Pedido chegou rápido e muito bem embalado!"</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/testimonials-2.jpg"
                    alt/>
                  <h5>Fred Simpsom</h5>
                  <p className="font-weight-light mb-0">"Estava com amigos em casa e sem idéias do que fazer. Chamei pelo telefone o restaurante e todos tivemos uma refeição perfeita."</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/testimonials-3.jpg"
                    alt/>
                  <h5>Sara Ipsum</h5>
                  <p className="font-weight-light mb-0">"A pizza que eu pedi estava maravilhosa! chegou rápido, nem acreditei!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="call-to-action text-white text-center">
          <div className="overlay"/>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Gostaria de receber novidades ?</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Digite seu email..."/>
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="https://israelcena.com.br">Sobre nós</a>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <a href="https://israelcena.com.br">Contato</a>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <a href="https://israelcena.com.br">Código de conduta</a>
                  </li>
                  <li className="list-inline-item">⋅</li>
                  <li className="list-inline-item">
                    <a href="https://israelcena.com.br">Alvará</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">© IsraelCena Website 2021. Todos os direitos são reservados.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="https://israelcena.com.br">
                      <i className="fab fa-facebook fa-2x fa-fw"/>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="https://israelcena.com.br">
                      <i className="fab fa-twitter-square fa-2x fa-fw"/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://israelcena.com.br">
                      <i className="fab fa-instagram fa-2x fa-fw"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
