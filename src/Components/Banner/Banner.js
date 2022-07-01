import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BannerLogo from '../../images/banner_logo.png';
import './Banner.css';

const Banner = () => {
    return (
        <React.Fragment>
            <div className='main_bg'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={BannerLogo} alt='banner-logo' />
                        </Col>
                        <Col md={6}>
                            <div className='banner_heading'>
                                <h1>Be a Connector of
                                    <span> Positive Change </span></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className='capricorn_text'>
                    <h4>The Capricorn Foundation is seeking solutions to reduce food waste in Namibia.</h4>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Banner