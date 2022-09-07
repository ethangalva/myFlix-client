import React from "react";
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

import './movie-card.scss'

export class MovieCard extends React.Component {
    render () {
        const {movie, onMovieClick} = this.props;

        return (
            <Col xs={12} style={{aspectRatio: "16 / 9", flexDirection: "column", height: "100%"}} className="d-flex align-items-center movieCard" type="button" onClick={() => onMovieClick(movie)}>
                <img crossOrigin="src={movie.ImagePath}" src={movie.ImagePath} style={{width: "100%"}} />
                <p style={{fontWeight: "bold", color: "rgb(160, 160, 160)", textAlign: "center", transition: "all .25s ease-in-out"}} >{movie.Title}</p>
            </Col>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        Rating: PropTypes.shape({
            Reviews: PropTypes.string.isRequired,
            Score: PropTypes.string.isRequired
        }),
        MovieLenght: PropTypes.string.isRequired,
        ReleaseYear: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Headshot: PropTypes.string.isRequired
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};