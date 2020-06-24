import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  search() {
    const { onSearch } = this.props;
    let { term } = this.state;
    term = term.trim();
    if (term.length !== 0) {
      onSearch(term);
    }
  }

  render() {
    const { term } = this.state;
    return (
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search tracks" aria-label="Search" value={term} onChange={this.handleTermChange} />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="button" onClick={this.search}>
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  onSearch: () => {},
};

export default SearchForm;
