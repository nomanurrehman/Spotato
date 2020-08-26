import React from 'react';

const Footer = function footer() {
  return (
    <footer className="bg-dark fixed-bottom">
      <div className="container">
        <p className="text-center text-success pt-3">All rights reserved.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
