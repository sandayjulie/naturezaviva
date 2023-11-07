import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Produtonatureza() {
  return (
    <div>
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text>Nome do Produto</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>

        <InputGroup className="mb-3" name="id_produtonatureza">
          <InputGroup.Text id="inputGroup-sizing-default">
            ID do Produto:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" name="marca">
            Marca:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <Form>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" name="Quantidade Estoque">
                  Quantidade no Estoque:
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" name="Data validade">
                  Data de validadade:
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>

            </Col>
          </Row>
        </Form>

        <FloatingLabel controlId="floatingTextarea2" name="descrição" label="Descrição do produto...">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <br />
        <div className="d-grid gap-2">
        <Button variant="dark" size="lg">Publicar</Button>
        </div>
      </div>
    </div>
  );
}

export default Produtonatureza;
