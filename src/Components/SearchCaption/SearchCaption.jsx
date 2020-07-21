import React from 'react';
import PropTypes from 'prop-types';

const SearchCaption = function searchCaption(props) {
  const { term } = props;
  if (term.length !== 0) {
    return <h3 className="mt-3 mb-3 text-success text-center">Search results for "{term}"</h3>;
  }
  return <h3 className="mt-3 mb-3 text-success text-center">Nothing searched. Nothing found.</h3>;
}

SearchCaption.propTypes = {
  term: PropTypes.string,
};

SearchCaption.defaultProps = {
  term: '',
}

export default SearchCaption;