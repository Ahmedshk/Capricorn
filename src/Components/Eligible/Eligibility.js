import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Eligible.css';

const Eligibility = () => {
    return (
        <div className='eligible_main'>
            <div className='eligible_head'>
                <Container>
                    <h1>Eligibility</h1>
                    <p>This Challenge is open and offered only to individuals aged sixteen (16) years or older at the time of registration,
                        teams consisting of up to five (5) individuals aged sixteen (16) years or older at the time of registration,
                        and legal business entities. More information here: “with a link to the Ts and Cs”.</p>

                    <div className='form_div'>
                        <h5>Log in to</h5>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <p className='text-end' style={{ fontSize: '15px', fontWeight: '600' }}>Forgot Password?</p>
                            <Button type="submit">
                                login
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Eligibility