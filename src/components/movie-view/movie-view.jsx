import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import './movie-view.scss';
import '../../index.scss';

export class MovieView extends React.Component { 
    
    render() {
        const {movie, onBackClick} = this.props;

        return (
            <Row className="justify-content-center container-row movie-view" style={{backgroundColor: "#141414", margin: "0px"}}>
                <Col xs={12} className="d-flex padding-0" style={{flexDirection: "column", minHeight: "100vh", maxWidth: "560px"}}>
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
                        <Col xs={12} className="d-flex" style={{paddingTop: "1em"}}>
                            <Col xs={12}>
                                <h1 className="white-font" style={{margin: "0px", marginBottom: "3px"}}>{movie.Title}</h1>
                                <div  style={{marginBottom: ".5rem"}}>{movie.MovieLenght} &bull; <Link to={`/genres/${movie.Genre.Name}`}><span className='genre grow'>{movie.Genre.Name}</span></Link> &bull; {movie.ReleaseYear}</div>
                                <p>{movie.Description}</p>
                            </Col>  
                        </Col>
                        {/* Director */}
                        <Link to={`/directors/${movie.Director.Name}`} director={movie.Director}>
                            <Col xs={12} className="d-flex director grow" style={{paddingTop: "1em", alignItems: "center"}} >
                                <Col xs={4} className="d-flex justify-content-center">
                                    <Image style={{filter: "grayscale(100%)", maxWidth: "80%"}} rounded="true" crossOrigin={movie.Director.Headshot} src={movie.Director.Headshot} />
                                </Col>
                                <Col xs={8}>
                                    <p className="white-font" style={{margin: "0px", fontSize: "1.1em"}}>{movie.Director.Name}</p>
                                    <p style={{margin: "0px"}}>{movie.Director.Bio}</p>
                                </Col>
                            </Col>
                        </Link>
                        {/* Buttons */}
                        <Col xs={12} className="d-grid gap-2 buttons-bottom d-lg-flex gap-lg-0" style={{paddingTop: "2em"}}>
                            <Col xs={12} lg={6} className="d-flex justify-content-center">
                                <Col xs={12} lg={11}>   
                                    <Button xs={12} variant='success' type='submit' style={{width: "100%"}} className="font-roboto d-flex align-items-center gap-1 justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                        </svg>
                                        PLAY NOW
                                    </Button>
                                </Col>
                            </Col>
                            <Col xs={12} lg={6} className="d-flex justify-content-center">
                                <Col xs={12} lg={11}>
                                    <Button xs={12}  onClick={() => { onBackClick() }}  variant='secondary' style={{width: "100%", backgroundColor: "#6c757d7d"}}>
                                        GO BACK
                                    </Button>
                                </Col>
                                
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
    // funciton that scrolls up when every time movie view document is opened [fixes opening document and being at the bottom of docuement ]
    scrollToTop = () => {
        window.scrollTo(0,0)
    };

    componentDidMount() {
        this.scrollToTop()
    }
}



