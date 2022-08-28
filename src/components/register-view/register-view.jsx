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
                
                
                {/* col 1/4 image (desktop only) */}
                <Col xs={0} md={0} lg={3} xl={3} className="d-none d-lg-block background-image" />
                
                {/* actual contents */}
                <Col xs={12} md={12} lg={9} xl={9} className="bg-color gap-2" >
                    {/* corners for the left sides of this col */}

                    <div className="inverted-border-radius-top d-none d-xl-block" />
                    <div className="inverted-border-radius-bottom d-none d-xl-block" />
                    

                    {/* White space */}

                    {/* Form -and- Welcome message */}
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <Row className="gap-2 align-items-center vh-100 align-content-center main-row gap-xl-0">

                            {/* White space 1 */}
                            {/* <Col xs={0} md={0} lg={0} xl={5}>qf</Col> */}

                            {/* Welcome message */}
                            <Col xs={12} md={12} lg={12} xl={12} style={{marginBottom: "5vh"}} >
                                <Row className="justify-content-center">
                                    <Col xs={10} sm={8} lg={8}>
                                        <p style={{marginBottom: "0px"}}>welcome</p>
                                        <h1 style={{fontWeight: "bold"}}>Register to watch unlimited movies, TV shows, and more.</h1>
                                    </Col>
                                </Row>
                            </Col>

                            {/* XL [1400+px] extra text */}
                            <Col xs={0} md={0} lg={0} xl={6} className="d-none d-xl-block">
                                <Row className="gap-2 justify-content-center">
                                    <Col xs={0} md={0} lg={0} xl={10}>
                                        <h2 className="font-weight-bold ">Watch everywhere.</h2>
                                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                                    </Col>
                                    <Col xs={0} md={0} lg={0} xl={10}>
                                        <h2 className="font-weight-bold">Enjoy on your TV.</h2>
                                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                                    </Col>
                                    <Col xs={0} md={0} lg={0} xl={10}>
                                        <h2 className="font-weight-bold">Download your shows to watch offline.</h2>
                                        <p>Save your favorites easily and always have something to watch.</p>
                                    </Col>
                                </Row>
                            </Col>   

                            {/* FORM */}
                            <Col xs={12} md={12} lg={12} xl={6}>
                                <Form>
                                    <Row className="gap-2  form-row">
                                        <Col xs={10} sm={8} lg={8}>
                                            <FloatingLabel controlId='formUsername' label='Username' bg="primary" >
                                                <Form.Control type='text' placeholder='Username' value={RegisterUsername} onChange={e => setRegistered(e.target.value)} />
                                            </FloatingLabel>
                                        </Col>

                                        <Col xs={10} sm={8} lg={8}>    
                                            <FloatingLabel controlId='formPassword' label='Password' >
                                                <Form.Control type='password' placeholder='Password' value={RegisterPassword} onChange={e => setRegisteredPassword(e.target.value)} />
                                            </FloatingLabel>
                                        </Col>
                                    
                                        <Col xs={10} sm={8} lg={8}>
                                            <FloatingLabel controlId='formEmail' label='E-mail' >
                                                <Form.Control type='email' placeholder='E-mail' value={RegisterEmail} onChange={e => setRegisteredEmail(e.target.value)} />
                                            </FloatingLabel>
                                        </Col>

                                        <Col xs={10} sm={8} lg={8} className="d-grid">
                                            <Button variant='success' type='submit' onClick={handleSubmit}>
                                                Sign Up
                                            </Button>
                                            <hr />
                                            <p xs={10} sm={8} lg={8} style={{marginBottom: "8px", textAlign: "center"}}>Already have an account?</p>
                                            <Button xs={10} sm={8} lg={8} variant='dark' >
                                                Log In
                                            </Button>
                                        </Col>
                                        <Col xs={10} sm={8} lg={8} style={{padding: "5vh"}}>
                                            <Row>
                                                <Col xs={6} style={{textAlign: "right", margin: "auto", fontWeight: "bold"}} >
                                                    Project links:
                                                </Col>
                                                <Col xs={6} className="align-items-center align-content-center">
                                                    <a href="#" rel="link to github of proyect" target="_blank" style={{color: "#212529", paddingRight: '10px'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" rel="link to github of proyect" target="_blank" style={{color: "#212529"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                                        </svg>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}