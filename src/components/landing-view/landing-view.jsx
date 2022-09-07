import React, {useState} from "react";

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
                        <Navbar.Brand href="#" className="d-flex gap-2 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b50911" className="bi bi-tv" viewBox="0 0 16 16">
                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                            </svg>
                            myFlix
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#features" className='center-hor d-flex gap-2 align-items-center' style={{color: "white"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    Profile
                                </Nav.Link>
                                <Nav.Link href="#pricing" className='center-hor d-flex gap-2 align-items-center' style={{color: "white"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-toggles" viewBox="0 0 16 16">
                                        <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
                                    </svg>
                                    Settings
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            {/* Row for big movie display on landing */}
            <Row className="h-100 justify-content-center container-row big-movie-display">
                <Col xs={12} md={12} lg={12} xl={12} className="d-flex align-items-center" style={{flexDirection: "column", justifyContent: "flex-end", paddingBottom: "5vh"}}>
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
                                            <Button xs={12} variant='primary' type='submit' style={{width: "100%"}} className="font-roboto d-flex align-items-center gap-1 justify-content-center">
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



// class="gap-2 align-items-center vh-100 align-content-center main-row gap-xl-0 row"