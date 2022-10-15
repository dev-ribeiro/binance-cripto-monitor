import { Col, Container, Row } from 'react-bootstrap'
import { DescriptionContainer } from './components/DescriptionContainer'
import { SearchCripto } from './components/SearchCripto'

export function Home(){
    return (
        <main>
            <Container className='mt-3'>
                <DescriptionContainer/>
                <Container className='mt-3 p-2 bg-dark rounded'>
                    <Row>
                        <Col>
                            <SearchCripto/>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>
        </main>
    )
}