import {Nav, NavbarBrand, Navbar, Container} from 'react-bootstrap';

function NavigationBar(){
    return (
        <Navbar>
            <Container>
                <NavbarBrand className='navbar'>Seputar Berita Indonesia</NavbarBrand>
                <Nav className='text-center'>
                    <Nav.Link href='#home' id='home-me'>Home</Nav.Link>
                    <Nav.Link href='#about' id='about-me'>About</Nav.Link>
                    <Nav.Link href='#contact' id='contact-me'>Contact us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href='#terbaru'>Berita baru</Nav.Link>
                    <Nav.Link href='#terlama'>Berita lama</Nav.Link>
                </Nav>
        </Container>
    </Navbar>
    );
}

export default NavigationBar