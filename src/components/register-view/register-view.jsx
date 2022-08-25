import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
// remove after touchups

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './register-view.scss';

export function RegisterView(props) {
    const [ RegisterUsername, setRegistered] = useState('')
    const [ RegisterPassword, setRegisteredPassword] = useState('')
    const [ RegisterEmail, setRegisteredEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(RegisterUsername);

        // post request to create user in db via api call
        props.onRegister(RegisterUsername);
    };

    return (
        <Container fluid>
            <Row className="vh-100">
                <Col xs={0} md={3} className="d-none d-md-block background" />
                
                <Col xs={12} md={9} className="bg-color" >
                    {/* corners for the left sides of this col */}
                    <div className="inverted-border-radius-top" />
                    <div className="inverted-border-radius-bottom" />

                    {/* FORM */}
                    <Form>
                        <FloatingLabel controlId='formUsername' label='Username' >
                            <Form.Control type='text' placeholder='Username' value={RegisterUsername} onChange={e => setRegistered(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel controlId='formPassword' label='Password' >
                            <Form.Control type='password' placeholder='Password' value={RegisterPassword} onChange={e => setRegisteredPassword(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel controlId='formEmail' label='Email' >
                            <Form.Control type='email' placeholder='Email' value={RegisterEmail} onChange={e => setRegisteredEmail(e.target.value)} />
                        </FloatingLabel>

                        <Button variant='primary' type='submit' onClick={handleSubmit}>Sign up</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}