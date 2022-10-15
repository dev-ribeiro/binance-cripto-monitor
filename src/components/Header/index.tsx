import { Figure } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png'
import styles from './styles.module.css'

export function Header() {
    return (
        <Navbar bg='dark' expand="lg">
            <Container className='text-light'>
                <Navbar.Brand className='text-light' href="#home">
                    <Figure.Image
                        src={logo}
                        alt=''
                        width={50}
                        height={50}
                    />
                    BINANCE BOT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-light' href="#home">Criptos</Nav.Link>
                        <Nav.Link className='text-light' href="#link">Docs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}