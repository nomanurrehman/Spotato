import React from 'react';
import PropTypes from 'prop-types'

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event){
    this.setState({
      term: event.target.value
    })
  }

  search(){
    const term = this.state.term.trim();
    if(term.length !== 0){
      this.props.onSearch(term);
    }
  }

  render(){
    return (
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search tracks" aria-label="Search" value={this.state.term} onChange={this.handleTermChange} />
        <div className="input-group-append">
          <button className="btn btn-navbar" onClick={this.search}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func
};

SearchForm.defaultProps = {
  onSearch: () => {}
};

export default SearchForm;
