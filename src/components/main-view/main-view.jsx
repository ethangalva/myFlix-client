import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RegisterView } from '../register-view/register-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LandingView } from '../landing-view/landing-view';
import { CarouselView } from '../carousel-view/carousel-view';

import '../../index.scss';
import './main-view.scss'

export class MainView extends React.Component {

    constructor(){
      super();
      this.state = {
        movies: [],
        selectedMovie: null,
        user: null,
        UsernameRegistered: null
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

    render() {
        const { movies, selectedMovie, user, UsernameRegistered } = this.state;

      // remove comments after done with main view
        // //forced to register after refresh for testing purposes
        // if (!UsernameRegistered) return <RegisterView onRegister={UsernameRegistered => this.onRegister(UsernameRegistered)} />

        // // if no user then the LoginView is rendered. if there is an user logged in, the user details are passed as a prop to the LoginView
        // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> 

        if (movies.length === 0) return <div className="main-view" />;
      
        return (
          <Container fluid>
            {/* if [selectedMovie: true] then  */}
            <Row className="justify-content-center container-row">
              {selectedMovie
                ? (
                  <></>
                )
                : <LandingView />
              }
            </Row>
            
            <Row className="justify-content-center container-row movieThumbnailRow">
              {selectedMovie
                ? ( 
                  <Col xs={12} style={{height: "100vh"}}>
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                  </Col>
                )
                : movies.map(movie => (
                    <Col xs={6} sm={4} lg={3} xl={2} style={{paddingRight: ".25em", paddingLeft: ".25em"}} className="movieCard-Parent">
                      <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                    </Col>
                  ))
              }
            </Row>
          </Container>
            
             
        );
      }
}