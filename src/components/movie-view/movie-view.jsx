import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'react-bootstrap/Image';


import './movie-view.scss';
import '../../index.scss';


export class MovieView extends React.Component {
    
    render() {
        const {movie, onBackClick} = this.props;

        return (
            <Row className="justify-content-center container-row movie-view">
                <Col xs={12} className="d-flex padding-0" style={{flexDirection: "column"}}>
                    {/* Close button */}
                    <Col xs={12}>
                        <Button className='go-back' variant='white' onClick={() => {onBackClick(null)}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                            </svg>
                        </Button>
                        {/* <CloseButton className='go-back' variant='white' onClick={() => {onBackClick(null)}} style={{backgroundColor: "white"}} /> */}
                    </Col>
                    {/* Top image of movie */}
                    <Col xs={12} className="movie-image">
                        <img crossOrigin="src={movie.ImagePath}" src={movie.ImagePath} className="img w-100"/>
                    </Col>
                    {/* Movie Information*/} 
                    <Col xs={12} style={{padding: "1em"}}>
                        {/* Ratings / Favorites Button */}
                        <Col xs={12} className="d-flex">
                            <Col xs={6}>
                                {/* Ratings */}
                                <div className="d-flex  gap-2 align-items-baseline" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f6c51c" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                    <p style={{margin: "0px"}}>
                                        <span className="white-font" >{movie.Rating.Score} / 10</span>
                                        <span style={{fontSize: ".9rem"}}> | {movie.Rating.Reviews / 1000000}M </span></p>
                                </div>
                            </Col>
                            {/* IF - movie in favorites then display empty heear button to add to list, else display full heart to remove from list */}
                            <Col xs={6} className="d-flex align-items-center" style={{justifyContent: "flex-end"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>
                            </Col>
                        </Col>
                        {/* Title / Genre /Description */}
                        <Col xs={12} className="d-flex" style={{paddingTop: "1em"}} >
                            <Col xs={12}>
                                <h1 className="white-font" style={{margin: "0px"}}>{movie.Title}</h1>
                                <div style={{marginBottom: ".5rem"}}>{movie.MovieLenght} &bull; {movie.Genre.Name} &bull; {movie.ReleaseYear}</div>
                                <p >{movie.Description}</p>
                            </Col>
                        </Col>
                        {/* Director */}
                        <Col xs={12} className="d-flex" style={{paddingTop: "1em", alignItems: "center"}} >
                            <Col xs={4} className="d-flex justify-content-center">
                                <Image style={{filter: "grayscale(100%)", maxWidth: "80%"}} rounded="true" crossOrigin={movie.Director.Headshot} src={movie.Director.Headshot} />
                            </Col>
                            <Col xs={8}>
                                <p className="white-font" style={{margin: "0px", fontSize: "1.1em"}}>{movie.Director.Name}</p>
                                <p style={{margin: "0px"}}>Phillips was known as a master of the “bro comedy” epitomized by his “Hangover” trilogy, chock-full of partying, slapstick humor, wild misadventures and sexual conquests.</p>
                            </Col>
                        </Col>
                        {/* Buttons */}
                        <Col xs={12} className="d-grid gap-2 buttons-bottom" style={{paddingTop: "2em"}}>
                            <Col xs={12} lg={6}>
                                <Button xs={12} variant='success' type='submit' style={{width: "100%"}} className="font-roboto d-flex align-items-center gap-1 justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                    PLAY NOW
                                </Button>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Button xs={12}  onClick={() => {onBackClick(null)}}  variant='secondary' type='submit' style={{width: "100%", backgroundColor: "#6c757d7d"}}>
                                    GO BACK
                                </Button>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
}



