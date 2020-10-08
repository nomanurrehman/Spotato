import React from 'react';

const PillBadge = function pillBadge(props) {
  return (
    <span className="badge badge-pill badge-success mr-2">{props.children}</span>
  );
}

export default PillBadge;
