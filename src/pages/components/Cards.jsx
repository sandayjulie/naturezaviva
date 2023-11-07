import Flores from "../../flores.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Cards.css'


function Cards()  {
  return (
    <div className="d-flex p-2 justify-content-around">
      {Flores.map((Flores) => {
        return (
            <div>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={Flores.img}
                />
                <Card.Body>
                  <Card.Title>{Flores.titulo}</Card.Title>
                  <Card.Text>{Flores.descricao}</Card.Text>
                  <Card.Text className="preco">R$ {Flores.preco}</Card.Text>
                  <div className="d-grid gap-2">
                  <Button variant="dark" size="lg" className="butao">Pedir</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
        );
      })}
    </div>
  );
}

export default Cards;
