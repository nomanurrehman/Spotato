import React from 'react';
import PropTypes from 'prop-types';

const SearchCaption = function searchCaption(props) {
  const {term} = props;

  if(term.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h1 className="text-success text-center">Search results for "{term}"</h1>
      </div>
    );
  }

  return null;
};

SearchCaption.propTypes = {
  term: PropTypes.string,
};

SearchCaption.defaultProps = {
  term: '',
}

export default SearchCaption;
