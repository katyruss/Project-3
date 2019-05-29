import React from 'react';

const Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""} display-flex`}>
    {children}
  </div>;

export default Row;

