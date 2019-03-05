import React from 'react';

const Paid = ({ascending, onChange}) => {
  return (
  <button className="waves-effect waves-light btn" name="paid" onClick={() => onChange(!ascending)}>paid</button>
)};

export default Paid;
