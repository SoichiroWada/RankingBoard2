import React from 'react';

const Points = ({ascending, onChange}) => (
  <button className="waves-effect waves-light btn" name="points" onClick={() => onChange(!ascending)}>Points</button>
);

export default Points;
