import React from 'react';

const Rank = ({ascending, onChange}) => {
  return (
    <button className="waves-effect waves-light btn" name="rank" onClick={() => {onChange(!ascending)}}>Rank</button>
  )
}

export default Rank;
