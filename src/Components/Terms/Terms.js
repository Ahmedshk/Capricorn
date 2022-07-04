import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Img4 from '../../images/img4.png';
// import Img2 from '../../images/img2.png';
// import Img5 from '../../images/img5.png';
// import Img3 from '../../images/img3.png';
import './Terms.css';

const Terms = () => {
    return (
        <div className='terms_main'>
            <h1>Definition <span> of key terms </span></h1>

            <Container>
                <Row className='justify-content-around mt-5'>
                    <Col md={5} className='card_bg'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-4 p-0'>
                                <img className='card_img' src={'https://googlebiz.co/html/images/img4.png'} alt='img4' />
                            </div>
                            <div className='col-md-8 col-sm-8 col-8'>
                                <div className='card_text'>
                                    <h5>Food Waste</h5>
                                    <p>Food waste refers to food that completes the food supply chain up to a final product, of good quality and fit for consumption, but still doesn't get
                                        consumed because it is discarded, whether or not after it is left to spoil or expire. Food waste typically (but not exclusively) takes place at retail and
                                        consumption stages in the food supply chain.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* ----------------- */}
                    <Col md={5} className='card_bg'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-4 p-0'>
                                <img className='card_img' src={'https://googlebiz.co/html/images/img2.png'} alt='img4' />
                            </div>
                            <div className='col-md-8 col-sm-8 col-8'>
                                <div className='card_text'>
                                    <h5>Sources</h5>
                                    <p>“Sources” refers to any entity that is
                                        involved in the manufacturing, distribution, buying and selling of food, and providing food to clients, like manufacturers, distributors, recyclers, grocers,
                                        restaurants, lodges, hospitals, households, airports, etc.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* ----------------- */}
                    <Col md={5} className='card_bg'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-4 p-0'>
                                <img className='card_img' src={'https://googlebiz.co/html/images/img5.png'} alt='img4' />
                            </div>
                            <div className='col-md-8 col-sm-8 col-8'>
                                <div className='card_text'>
                                    <h5>Receivers/Distributors</h5>
                                    <p>“Receivers/distributors” refers to any entity that is involved in the receiving of food for the purpose of providing food and meals to beneficiaries (see definition of “beneficiaries” below) on a non-profit basis, like soup kitchens, charities, welfare organizations,
                                        hospices, etc.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* ----------------- */}
                    <Col md={5} className='card_bg'>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-4 p-0'>
                                <img className='card_img' src={'https://googlebiz.co/html/images/img3.png'} alt='img4' />
                            </div>
                            <div className='col-md-8 col-sm-8 col-8'>
                                <div className='card_text'>
                                    <h5>Beneficiaries</h5>
                                    <p>“Beneficiaries” refers to vulnerable
                                        persons who receive food from Sources and/or
                                        Receivers/Distributors.  </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* ----------------- */}
                </Row>
            </Container>
        </div>
    )
}

export default Terms