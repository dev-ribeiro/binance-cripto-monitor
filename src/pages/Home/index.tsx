import { Container } from 'react-bootstrap'
import { DescriptionContainer } from './components/DescriptionContainer'
import styles from './styles.module.css'

export function Home(){
    return (
        <main>
            <Container className='mt-3'>
                <DescriptionContainer/>
            </Container>
        </main>
    )
}