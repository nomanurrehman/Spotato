import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';

const TopNavigation = function topNavigation(props) {
  const { onSearch } = props;
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <SearchForm onSearch={onSearch} />
    </nav>
  );
};

TopNavigation.propTypes = {
  onSearch: PropTypes.func,
};

TopNavigation.defaultProps = {
  onSearch: () => {},
};

export default TopNavigation;
