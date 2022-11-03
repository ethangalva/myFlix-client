import React from "react";
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import './movie-card.scss'
import { Button } from "react-bootstrap";

export class MovieCard extends React.Component {
    render () {
        const {movie} = this.props;

        return (
            <Col xs={12} style={{aspectRatio: "16 / 9", flexDirection: "column", height: "100%"}} className="d-flex align-items-center movieCard" type="button">
                <Link to={`/movies/${movie._id}`}>
                    <img crossOrigin="src={movie.ImagePath}" src={movie.ImagePath} style={{width: "100%"}} />
                    <p style={{fontWeight: "bold", color: "#a0a0a0", textAlign: "center", transition: "all .25s ease-in-out"}} >{movie.Title}</p>
                </Link>
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
    }).isRequired
};