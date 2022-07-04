import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/esm/Container';
import footerLogo from '../../images/banner_logo.png';

const Footer = () => {
    return (
        <div className='footer_main'>

            <div className='footer_img'>
                <img src={'https://googlebiz.co/html/images/banner_logo.png'} alt='footer' />
            </div>
            
            <Container>
                <div className='copy_rights'>
                    <div>
                        <p>Copyright © 2022 All Rights Reserved</p>
                    </div>

                    <div>
                        <ul>
                            <li>FAQs</li>
                            <li>Ts & Cs apply </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer