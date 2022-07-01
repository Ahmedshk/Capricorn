import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cri1 from '../../images/cri1.png';
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

            <Container>
                {/* <img src={MainLogo} alt={'rotate-logo'} className='rotate_logo' /> */}
                <Row>
                    <Col md={4} className='criteria_box'>
                        <img src={cri1} alt='cri1' />
                        <h6>Level of innovation</h6>
                        <p>Novelty or newness of the proposed solution. How bold and fresh is the idea? Is it a game changer?</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Criteria