import React, {useState} from "react";
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './landing-view.scss';
import '../../index.scss';

export function LandingView(props) {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        // actual contents
            <Col xs={12} md={12} lg={12} xl={12} style={{height: "100vh"}}>
                <Row style={{position: "relative"}}>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" style={{position: "absolute"}}>
                        <Container>
                            {/* set href when available */}
                            <Navbar.Brand href="/" className="d-flex gap-2 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b50911" className="bi bi-tv" viewBox="0 0 16 16">
                                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                </svg>
                                <span style={{color: "white"}}>myFlix</span>
                            </Navbar.Brand>
                            <Nav.Link href="/profile/:_id">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                                </svg>
                            </Nav.Link>
                        </Container>
                    </Navbar>
                </Row>
                {/* Row for big movie display on landing */}
                <Row className="h-100 justify-content-center container-row big-movie-display">
                    <Col xs={12} md={12} lg={12} xl={12} className="d-flex align-items-center" style={{flexDirection: "column", justifyContent: "flex-end", padding: "5vh 0px"}}>
                            <Col xs={11} style={{ color: "white"}} className="d-flex" >
                                <Col sm={12} md={6} className="d-grid gap-3">
                                    <Col xs={12}>
                                        <h1 style={{fontWeight: "bold", fontSize: "4em", margin: "0px"}} className="font-roboto ">Dune</h1>
                                    </Col>
                                    <Col className="font-roboto d-flex align-items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5c51c" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        8.0/10 | 604k
                                        <span style={{color: "#a0a0a0", paddingLeft: "30px"}}>2h 35m | 2021 | PG-13 </span>

                                    </Col>
                                    <Col className="font-roboto d-flex align-items-center gap-1" xs={12} >
                                        A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.
                                    </Col>
                                    <Col xs={12}  className="">
                                        <Row className="gap-2 align-items-center align-content-center gap-lg-0">
                                            <Col xs={12} lg={6}>
                                                <Button xs={12} variant='success' type='submit' style={{width: "100%"}} className="font-roboto d-flex align-items-center gap-1 justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                                    </svg>
                                                    PLAY NOW
                                                </Button>
                                            </Col>
                                            <Col xs={12} lg={6}>
                                                <Button xs={12}  variant='secondary' type='submit' style={{width: "100%", backgroundColor: "#6c757d7d"}}>
                                                    TRAILER
                                                </Button>
                                            </Col>
                                        </Row>  
                                    </Col>
                                </Col>
                            </Col>
                    </Col>
                </Row>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
                    </style>
            </Col>
    )
}

