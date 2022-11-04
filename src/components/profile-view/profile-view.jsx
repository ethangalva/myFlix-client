import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


import '../../index.scss';
import './profile-view.scss';

export class ProfileView extends React.Component {
    render() {
        // Movies has the information of the movies
        // userName has username of logged in user
        const {userName, onBackClick, Movies} = this.props;

        return (
            <Row className="justify-content-center director-view" style={{backgroundColor: "#141414", margin: "0px"}}>
                <Col xs={12} className="d-flex padding-0 gap-3" style={{flexDirection: "column", minHeight: "90vh", maxWidth: "560px"}}>
                    {userName}
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
