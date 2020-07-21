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
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Keywords" value={term} onChange={this.handleTermChange} />
        <button className="btn btn-success my-2 my-sm-0" type="button" onClick={this.search}>Search Spotify</button>
      </form>
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
