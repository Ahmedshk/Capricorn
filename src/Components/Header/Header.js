import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import MainLogo from '../../images/main_logo.png';
import { BsTelephoneFill } from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={MainLogo} alt='main-logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">
                            <div className='header_phone'>
                                <div>
                                    <BsTelephoneFill />
                                </div>

                                <div className='phone'>
                                    <span>HELPLINE:</span>
                                    <p>1800 - 123 456 78</p>
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <div className='header_phone'>
                                <div>
                                    <MdEmail className='email-icon' />
                                </div>

                                <div className='phone'>
                                    <span>ANY QUESTION, EMAIL US:</span>
                                    <p>info@company.com</p>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header