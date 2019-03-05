import React from 'react';
import '../index.css';

const Name = ({ascending, onChange}) => {
  return (
  <button className="waves-effect waves-light btn" name="name" onClick={() => onChange(!ascending)}>Name</button>
  )
}


export default Name;
