import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
// remove after touchups

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './register-view.scss';
import '../../index.scss'

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
        <Container fluid className="bg-color">
            <Row className="vh-100 justify-content-center container-row">
                
                
                {/* col 1/2 image (desktop only) */}
                <Col xs={0} md={3} className="d-none d-md-block background-image" />
                
                {/* actual contents */}
                <Col xs={12} md={9} className="bg-color gap-2" >
                    {/* corners for the left sides of this col */}
                    <div className="inverted-border-radius-top d-none d-md-block" />
                    <div className="inverted-border-radius-bottom d-none d-md-block" />
                    

                    {/* White space */}

                    {/* Form -and- Welcome message */}
                    <Row className="gap-2 align-items-center vh-100 align-content-center main-row">
                        {/* Welcome message */}
                        {/* <Row className="justify-content-center"> */}
                        <Col xs={12} md={5}>
                            <Row className="justify-content-center">
                                <Col xs={10} sm={8} md={7} lg={6} xl={5} xxl={4}>
                                    <p style={{marginBottom: "0px"}}>welcome</p>
                                    <h1 style={{fontWeight: "bold"}}>Register to watch unlimited movies, TV shows, and more.</h1>
                                </Col>
                            </Row>
                        </Col>
                        {/* </Row> */}
                        

                        {/* FORM */}
                        <Col xs={12} md={7}>
                            <Form>
                                <Row className="gap-2 justify-content-center">
                                    <Col xs={10} sm={8} md={7} lg={6} xl={5} xxl={4}>
                                        <FloatingLabel controlId='formUsername' label='Username' bg="primary" >
                                            <Form.Control type='text' placeholder='Username' value={RegisterUsername} onChange={e => setRegistered(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                
                                    <Col xs={10} sm={8} md={7} lg={6} xl={5} xxl={4}>    
                                        <FloatingLabel controlId='formPassword' label='Password' >
                                            <Form.Control type='password' placeholder='Password' value={RegisterPassword} onChange={e => setRegisteredPassword(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                
                                    <Col xs={10} sm={8} md={7} lg={6} xl={5} xxl={4}>
                                        <FloatingLabel controlId='formEmail' label='E-mail' >
                                            <Form.Control type='email' placeholder='E-mail' value={RegisterEmail} onChange={e => setRegisteredEmail(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>

                                    <Col xs={10} sm={8} className="d-grid">
                                        <Button variant='success'>
                                            Sign Up
                                        </Button>
                                        <hr />
                                        <p xs={10} sm={8} style={{marginBottom: "8px", textAlign: "center"}}>Already have an account?</p>
                                        <Button xs={10} sm={8} variant='dark' >
                                            Log In
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}