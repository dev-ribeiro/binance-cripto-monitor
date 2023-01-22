import { Card, Col, Container, Row } from 'react-bootstrap'
import { DescriptionContainer } from './components/DescriptionContainer'
import { ResultCriptoQuery } from './components/ResultCriptoQuery'
import { SearchCripto } from './components/SearchCripto'

export function Home() {
  return (
    <main>
      <Container className="mt-3" style={{ width: '45rem' }}>
        <DescriptionContainer />
        <Container className="mt-3 p-2 bg-dark rounded">
          <Row>
            <Card.Title className="my-2 mx-1 text-light text-left">
              Faça sua busca nesse painel:
            </Card.Title>
            <Col>
              <SearchCripto />
            </Col>
            <Col>
              <ResultCriptoQuery />
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  )
}
