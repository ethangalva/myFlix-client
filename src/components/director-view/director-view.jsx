import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


import '../../index.scss';
import './director-view.scss';

export class DirectorView extends React.Component { 
    render() {
        const {director, onBackClick} = this.props;
        
        return (
            <Row className="justify-content-center director-view" style={{backgroundColor: "#141414", margin: "0px"}}>
                <Col xs={12} className="d-flex padding-0 gap-3" style={{flexDirection: "column", minHeight: "90vh", maxWidth: "560px"}}>
                    {/* HEADSHOT */}
                    <Row className="justify-content-center" style={{paddingTop: "5vh"}}>
                        <Image style={{filter: "grayscale(0%)", width: "auto", height: "25vh"}} rounded="true" crossOrigin={director.Headshot} src={director.Headshot} />
                    </Row>
                    {/* NAME */}
                    <Row>
                        <h3 style={{textAlign: "center", color: "white"}}>{director.Name}</h3>
                    </Row>
                    {/* BIO */}
                    <Row style={{padding: "0px 10%"}}>
                        <p className="bio">{director.Bio}</p>
                    </Row>
                    {/* DOB / DISEASED */}
                    <Row style={{margin: "0px"}}>
                        {/* DOB */}
                        <Col style={{padding: "0px", textAlign: "center"}}>
                            Date of Birth<br></br>
                            <span style={{color: "white", fontSize: "16px"}}>{director.Birth}</span>
                        </Col>
                        <Col style={{padding: "0px", textAlign: "center"}}>
                            Deceased<br></br>
                            <span style={{color: "white", fontSize: "16px"}}>NA</span>
                        </Col>
                    </Row>
                    {/* GO BACK BUTTON */}
                    <Row style={{margin: "0px"}}>
                        
                    </Row>
                </Col>
                <Col xs={12} className="d-flex padding-0 gap-3" style={{flexDirection: "column", minHeight: "10vh", maxWidth: "560px"}}>
                    <Row style={{margin: "0px"}} className="justify-content-center">
                        <Button xs={12}  onClick={() => { onBackClick() }}  variant='secondary' style={{width: "90%", backgroundColor: "#6c757d7d"}}>
                            GO BACK
                        </Button>
                    </Row>
                </Col>
            </Row>
        )
    }
}
