import Carrosel from "./components/Carrosel";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <Carrosel />
      <br />
      <h1 className="d-flex justify-content-center">PRODUTOS RELEVANTES</h1>
      <Cards />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
