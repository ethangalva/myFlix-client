import React from 'react';
import axios from 'axios';

import { RegisterView } from '../register-view/register-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

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

        //forced to register after refresh for testing purposes
        if (!UsernameRegistered) return <RegisterView onRegister={UsernameRegistered => this.onRegister(UsernameRegistered)} />

        // if no user then the LoginView is rendered. if there is an user logged in, the user details are passed as a prop to the LoginView
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> 

        if (movies.length === 0) return <div className="main-view" />;
      
        return (
          <div className="main-view">
            {/* it will either display a MovieView if a movie has been selected -or- it will display the full list movies if no movie is selected  */}
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
}