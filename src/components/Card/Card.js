import React from 'react';
import './Card.css';

const Card = (props) =>{
  const { 
    name, 
    founded, 
    seats, 
    titles, 
    coatOfArms, 
    ancestralWeapons, 
    words,
    swornMembers,
    loadSwornMembers } = props;
  return (
    <div className="card-container">
      <div className="card-info">
        <h1>{name}</h1>
        <h3>founded in: {founded}</h3>
        <h4>seats: {seats}</h4>
        <h5>titles:{titles}</h5>
        <p>{coatOfArms}</p>
        <p>{ancestralWeapons}</p>
        <p>{words}</p>
        <button onClick={() => loadSwornMembers(swornMembers)}>
          show me swornMembers
        </button>
      </div>
    </div>
  );
};



export default Card;