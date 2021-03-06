import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  render() {
    return (<header className="movie-card-header">
      <h1 className="page-title">Movie Cards Library</h1>
    </header>);
  }
}
Header.propTypes = { h1: PropTypes.string };
Header.defaultProps = { h1: '' };
export default Header;
