import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './movie-view.scss';
import '../../index.scss';


export class MovieView extends React.Component {
    
    render() {
        const {movie, onBackClick} = this.props;

        return (
            <Row className="h-100 justify-content-center container-row movie-view">
                <Col xs={12} className="d-flex padding-0 flex-direction-column">
                    {/* Top image of movie */}
                    <Col xs={12} className="movie-image">
                        <img crossOrigin="src={movie.ImagePath}" src={movie.ImagePath} className="img w-100"/>
                    </Col>
                    {/* Movie Information*/}
                    <Col xs={12}>
                        {/* Ratings / Favorites Button */}
                        <Col xs={12} style={{padding: "3vh 1em"}}>
                            <Col xs={6}>
                                q  wd
                            </Col>
                            
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
}



