import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cri1 from '../../images/cri1.png';
import cri2 from '../../images/cri2.png';
import cri3 from '../../images/cri3.png';
import cri4 from '../../images/cri4.png';
import cri5 from '../../images/cri5.png';
import cri6 from '../../images/cri6.png';
import sectionImg from "../../images/section_img.jpg";
import MainLogo from '../../images/main_logo.png';
import './Criteria.css';

const Criteria = () => {
    return (
        <React.Fragment>
            <div className='criteria_main'>
                <Container>
                    <h1>Judging <span>Criteria</span></h1>
                    <p>Submissions will be evaluated by an expert panel of judges on the following criteria:</p>
                </Container>
            </div>

            <Container className='boxes'>
                <Row className='justify-content-end'>
                    <Col md={11}>
                        <Container>
                            <img src={'https://googlebiz.co/html/images/main_logo.png'} alt={'rotate-logo'} className='rotate_logo' />
                            <Row className='justify-content-around'>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri1.png'} alt='cri1' />
                                    <h5>Level of innovation</h5>
                                    <p>Novelty or newness of the proposed solution. <br /> How bold and fresh is the idea? Is it a game changer?</p>
                                </Col>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri2.png'} alt='cri1' />
                                    <h5>Feasibility (practicality?)
                                        of the proposed solution</h5>
                                    <p>High possibility of implementation with as little risk and costs as possible. Technical and
                                        economic feasibility will also be considered.</p>
                                </Col>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri3.png'} alt='cri1' />
                                    <h5>Impact and Benefits</h5>
                                    <p>The potential of the proposed solution to generate exponential benefits to address the issue of Food Waste in Namibia, i.e.,
                                        effectively leading to more food – that would have been wasted otherwise – reaching more vulnerable people in Namibia.</p>
                                </Col>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri4.png'} alt='cri1' />
                                    <h5>Scalability</h5>
                                    <p>Likelihood of scalability of the proposed solution.</p>
                                </Col>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri5.png'} alt='cri1' />
                                    <h5>Sustainability</h5>
                                    <p>Likelihood of sustainability of the proposed solution.</p>
                                </Col>
                                <Col md={4} className='criteria_box'>
                                    <img src={'https://googlebiz.co/html/images/cri6.png'} alt='cri1' />
                                    <h5>Inspiring</h5>
                                    <p>Will the solution inspire people to address the problem of Food Waste in Namibia?</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='mt-5 p-0'>
                <div>
                    <img src={sectionImg} alt='section-img' />
                </div>
            </Container>
        </React.Fragment>
    )
}
export default Criteria