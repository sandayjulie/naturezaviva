import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light" >
        <div className="imagem">
        <img src="/src/assets/flor.svg" height="50" color="light" className=""/>

        <Container className="navbar">
          <Navbar.Brand href="/" className="links1"> Natureza Viva </Navbar.Brand>
          <Nav className="me-auto">
            <div className="links">
              <Nav.Link href="/login" className="links1"> Entrar </Nav.Link>
              <Nav.Link href="/produtos" slot="end" className="links2">
                Cadastro Produtos
              </Nav.Link>
            </div>
          </Nav>
        </Container>
        </div>
      </Navbar>
    </>
  );
}

export default Menu;
