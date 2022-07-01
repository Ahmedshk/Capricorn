import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from "../../images/img1.jpg";
import './About.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='about_main'> 
                <Container>
                    <h1><span> The Capricorn </span> Foundation </h1>
                    <p>The Capricorn Group and its subsidiary companies aspire to be Connectors of Positive Change by creating
                        economic value in a responsible way that creates sustainable opportunities
                        for advancing and improving the economic and social conditions in the communities where we operate.</p>
                </Container>
            </div>

            <Container fluid className='mt-4'>
                <Row>
                    <Col md={6} className={'d-flex align-items-center'}>
                        <div className='about_capricorn'>
                            <h5>The Capricorn Foundation was established
                                in February 2020</h5>
                            <h6>as a non-profit Association Incorporated under <br />
                                Section 21 of the Company’s Act in Namibia, as the Group’s vehicle for its corporate social responsibility (CSR)
                                initiatives. </h6>
                            <p>Our Group’s CSR Vision: To be an inspiring Connector of Positive Change by creating economic value in a responsible way that creates sustainable opportunities for advancing and improving the economic and social conditions in the communities in which we operate.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className='p-0'>
                        <img src={Img1} alt='img1' />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About