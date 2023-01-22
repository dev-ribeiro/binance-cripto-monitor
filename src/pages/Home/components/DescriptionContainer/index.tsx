import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export function DescriptionContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-2 my-1">
            <Card.Title className="bg-dark text-light text-center p-1 rounded ">
              Projeto
            </Card.Title>
            <Card.Body>
              Uma aplicação React que faz requisições à API da Binance e
              consegue obter dados de pares de moeda. Além disso, você pode
              simular investimentos e projetar, dentro do escopo de tempo
              definido, um possível retorno desse investimento.
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-2 my-1">
            <Card.Title className="bg-danger text-light text-center p-1 rounded ">
              Avisos
            </Card.Title>
            <Card.Body>
              A aplicação utiliza como base o servidor de testes da Binance, a
              rede Testnet, em breve implementação com a rede principal.
              Portanto, não me responsabilizo caso seja utilizada na rede
              principal. Além disso, operações com criptomoedas envolvem alto
              risco, tenha isso em mente antes de fazer uma operação.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
