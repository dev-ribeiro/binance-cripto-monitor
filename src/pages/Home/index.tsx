import { Col, Container, Image, Row } from 'react-bootstrap'
import { DescriptionContainer } from './components/DescriptionContainer'

export function Home() {
  return (
    <main>
      <Container className="mt-3">
        <Row>
          <Col>
            <DescriptionContainer />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              src="https://images.unsplash.com/photo-1645731504331-72636399448e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Imagem de algumas criptomoeadas coloridas jogadas ao ar."
              rounded
              width={400}
              title="Credits: Rodion Kutsaiev | Unsplash"
            />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
