import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Produtonatureza from "./components/FormularioCad"

function FormularioProduto() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <br />
      <h1 className="container">CADASTRE SEUS PRODUTOS</h1>
      <br />
      <Produtonatureza />
      <br />
      <Footer />
    </div>
  );
}

export default FormularioProduto;
