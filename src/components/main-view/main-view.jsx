import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RegisterView } from '../register-view/register-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LandingView } from '../landing-view/landing-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';

import '../../index.scss';
import './main-view.scss'


export class MainView extends React.Component {

    constructor(){
      super();
      this.state = {
        movies: [],
        selectedMovie: null,
        user: null,
        UsernameRegistered: null,
        user_id: null
      };
    }

    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    // updates the user state of the MainView component and will be called when the user has successfully logged in
    onLoggedIn(authData) { 
      console.log(authData);

      this.setState({
        user: authData.user.Username,
        // user_id: authData.user._id
      });

      console.log(user);

      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    }

    // add movie to users favorites via _id
    addMovieFavorites(token, UID) {
      axios.post('/users/:_id/favoriteMovies/:movieID', {
        headers: { Authorization: `Bearer ${token}`}
      },) 
    }

    // gets movies with the key that the signed in user uses
    getMovies(token) {
      axios.get('https://my-flix-apps.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
        // assign the result to the state
        this.setState({
          movies: response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    }

    // function to erase local storage information of loged in user 
    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setState({
        user: null
      });
    }

    onRegister(UsernameRegistered) {
      this.setState({
        UsernameRegistered
      })
    }

    render() {
        const { movies, selectedMovie, user, UsernameRegistered } = this.state;
      
        return (
          <Router>
            <div className="main-view">
              {/* <button onClick={() => { this.onLoggedOut() }}>Logout</button> */}

              {/* Route to main view*/}
              <Route exact path="/" render={() => {
                if (!user) return <Row>
                  <Col>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                  </Col>
                </Row>

                return <Row style={{margin: "0px"}}>
                  <LandingView />

                  <Row className="justify-content-center container-row movieThumbnailRow" style={{padding: "0px 0px", margin: "0px"}}>
                    {movies.map(movie => (
                          <Col xs={6} sm={4} lg={3} xl={2} key={movie._id} style={{paddingRight: ".25em", paddingLeft: ".25em"}} className="movieCard-Parent">
                            <MovieCard key={movie._id} movie={movie} />
                          </Col>
                        ))
                    }
                  </Row>
                </Row>
              }} />

              {/* Route to register view */}
              <Route exact path="/register" render={() => {
                if (user) return <Redirect to="/" /> 
                return <Col>
                  <RegisterView />
                </Col>
              }} />

              {/* Route to individual movie view */}
              <Route path="/movies/:movieId" render={({ match, history }) => {
                if (!user) return <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                if (movies.lenght === 0) return <div className="main-view" />
                return <Col md={12}>
                  <MovieView movie={movies.find(m => m._id === match.params.movieId)} movies={movies} onBackClick={() => history.goBack()} />
                </Col>
              }} />

              {/* Route to individual genre view */}
              <Route exact path={"/genres/:name"} render={({ match, history }) => {
                if (!user) return <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                if (movies.length === 0) return <div className='main-view'/>
                return <Col md={12}>
                  <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                </Col>
              }} />

              {/* Route to individual director view */}
              <Route exact path={"/directors/:name"} render={({ match, history }) => {
                if (!user) return <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                if (movies.lenght === 0) return <div className="main-view" />
                return <Col md={12}>
                  <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} Movies={movies} onBackClick={() => history.goBack()} />
                </Col>
              }} />

              {/* User Profile view */}
              <Route exact path={"/profile/:_id"} render={({ match, history}) => {
                if (!user) return <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                if (movies.lenght === 0) return <div className="main-view" />
                return <Col md={12}>
                  <ProfileView userName={localStorage.getItem('user')} Movies={movies} onBackClick={() => history.goBack()} />
                </Col>
              }} />

            </div>
            


            {/* <Row className="justify-content-center container-row">
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
                  <Col xs={12}>
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                  </Col>
                )
                : movies.map(movie => (
                    <Col xs={6} sm={4} lg={3} xl={2} key={movie._id} style={{paddingRight: ".25em", paddingLeft: ".25em"}} className="movieCard-Parent">
                      <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                    </Col>
                  ))
              }
            </Row> */}

          </Router>









          // <Router>
          //   {/* temporary button */}
          //   <button onClick={() => { this.onLoggedOut() }}>Logout</button>
          //   {/* if [selectedMovie: true] then  */}
          //   <Row className="justify-content-center container-row">
          //     {selectedMovie
          //       ? (
          //         <></>
          //       )
          //       : <LandingView />
          //     }
          //   </Row>
            
          //   <Row className="justify-content-center container-row movieThumbnailRow">
          //     {selectedMovie
          //       ? ( 
          //         <Col xs={12}>
          //           <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          //         </Col>
          //       )
          //       : movies.map(movie => (
          //           <Col xs={6} sm={4} lg={3} xl={2} key={movie._id} style={{paddingRight: ".25em", paddingLeft: ".25em"}} className="movieCard-Parent">
          //             <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          //           </Col>
          //         ))
          //     }
          //   </Row>

          // </Router>
        );
      }
}