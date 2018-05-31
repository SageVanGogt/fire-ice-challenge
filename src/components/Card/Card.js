import React from 'react';

const Card = (props) =>{
  const { 
    name, 
    founded, 
    seats, 
    titles, 
    coatOfArms, 
    ancestralWeapons, 
    words } = props;
  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>founded in: {founded}</h3>
      <h4>seats: {seats}</h4>
      <h5>titles:{titles}</h5>
      <p>{coatOfArms}</p>
      <p>{ancestralWeapons}</p>
      <p>{words}</p>
    </div>
  );
};



export default Card;