import React from 'react'

function UserRow ({rank, points, name, paid}){
    return (
      <tr>
        <td className="UserRowRank">{rank}</td>
        <td className="UserRowPoints">{points}</td>
        <td className="UserRowName">{name}</td>
        <td className="UserRowAge">{paid}</td>
      </tr>
    );
}

export default UserRow;