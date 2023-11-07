import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section container">
            <div className="d-flex ">
            <img
              alt=""
              src="/src/assets/flor.svg"
              color="light"
              height="30"
              margin-right="300px"
              className="d-inline-block align-top imgfooter"
            />
            <br/>
            <h3> Natureza Viva</h3>
            </div>
            <p>
              Aqui você encontra uma variedade de produtos naturais, todos de acordo com o seu padrão.
            </p>
          </div>
          <div className="footer-section">
            <h3>Retorne</h3>
            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li>
                <a href="/login">Entrar</a>
              </li>
              <li>
                <a href="/produtos">Produtos</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} NATUREZA VIVA. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
