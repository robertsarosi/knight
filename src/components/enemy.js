import React from 'react';

const Enemy = ({ enemy }) => {
  return (
    <div>
      <h2>Ellenség: {enemy.name}</h2>
      <p>HP: {enemy.hp}</p>
      <p>Sebzés: {enemy.damage}</p>
    </div>
  );
};

export default Enemy;
