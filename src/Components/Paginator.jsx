import React from 'react';

const Paginator = function paginator() {
  return (
    <nav>
      <ul className="mb-0 pagination justify-content-center">
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
  );
};

Paginator.propTypes = {};
Paginator.defaultProps = {};

export default Paginator;
