import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';

class TopNavigation extends React.Component {
  render(){
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <SearchForm onSearch={this.props.onSearch} />
      </nav>
    );
  }
}

TopNavigation.propTypes = {
  onSearch: PropTypes.func
};

TopNavigation.defaultProps = {
  onSearch: () => {}
};

export default TopNavigation;
