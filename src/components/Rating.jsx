import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return (<div className="movie-card-rating">{rating}</div>);
  }
}

Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: 0 };

export default Rating;

