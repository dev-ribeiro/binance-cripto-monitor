import { Col, Container, Row } from 'react-bootstrap'
import { ResultCriptoQuery } from './components/ResultCriptoQuery'
import { SearchCripto } from './components/SearchCripto'

export function Criptos() {
  return (
    <Container className="mt-2 d-flex justify-content-center">
      <Row>
        <Col>
          <SearchCripto />
        </Col>
        <Col>
          <ResultCriptoQuery />
        </Col>
      </Row>
    </Container>
  )
}
