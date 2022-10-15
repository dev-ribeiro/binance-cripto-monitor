import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png'
import styles from './styles.module.css'

export function Header() {
    return (
        <Navbar expand="lg">
            <Container className='bg-dark rounded text-light p-2'>
                <Container className={styles.logo}>
                    <img src={logo} alt="" />
                    <h1>BINANCE BOT</h1>
                </Container>
                <div className={styles.wrapper}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' href="/">Home</Nav.Link>
                            <Nav.Link className='text-light' href="/" target='_blank'>Docs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}
