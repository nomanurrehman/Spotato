import React from 'react';
// import PropTypes from 'prop-types';

class Paginator extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                <span>&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="active page-item"><a className="page-link" href="#">2<span className="sr-only">(current)</span></a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
            <li className="page-item"><a className="page-link" href="#">10</a></li>
            <li className="page-item">
              <a className="page-link" href="#">
                <span>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Paginator.propTypes = {};
Paginator.defaultProps = {};
