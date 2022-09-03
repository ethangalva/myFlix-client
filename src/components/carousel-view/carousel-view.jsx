import React, { useState } from "react";
import CarouselItem from "react-bootstrap/CarouselItem";
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


import './carousel-view.scss';

export class CarouselView extends React.Component {

    constructor(){
        super();
        this.state = {
          movies: [],
          selectedMovie: null
        };
      }
      
    componentDidMount(){
        axios.get('https://my-flix-apps.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
        });
    }
  
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

      // updates the user state of the MainView component and will be called when the user has successfully logged in
    onLoggedIn(user) { 
        this.setState({
            user
        });
    }
      
      onRegister(UsernameRegistered) {
        this.setState({
          UsernameRegistered
        })
      }

    render () {
        const { movies, selectedMovie } = this.state;


        return (
            <Carousel className="w-100" variant="light" style={{backgroundColor: 'red'}}>
                <Carousel.Item className="d-flex">
                    {selectedMovie
                            ? ( 
                            <Col md={8}>
                                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                            </Col>
                            )
                        : movies.map(movie => (
                            <Col xs={6} sm={4} lg={3} xl={2} style={{paddingRight: "3px", paddingLeft: "3px", zIndex: "2"}}>
                            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                            </Col>
                        ))
                    }
                </Carousel.Item>
            </Carousel>
        );
    }
}