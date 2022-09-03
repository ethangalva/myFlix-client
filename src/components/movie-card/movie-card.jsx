import React from "react";
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

export class MovieCard extends React.Component {
    render () {
        const {movie, onMovieClick} = this.props;

        return (
            <Col xs={12} style={{aspectRatio: "16 / 9", flexDirection: "column"}} className="d-flex align-items-center" type="button" onClick={() => onMovieClick(movie)}>
                <img crossOrigin="src={movie.ImagePath}" src={movie.ImagePath} style={{width: "100%"}}  />
                <p style={{fontWeight: "bold", color: "rgb(160, 160, 160)"}} >{movie.Title}</p>
            </Col>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};