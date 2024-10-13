import React from 'react';

const Player = ({ player }) => {
  return (
    <div>
      <h2>Játékos: {player.name}</h2>
      <p>HP: {player.hp}</p>
      <p>Fegyver: {player.equipment.weapon.name} (Sebzés: {player.equipment.weapon.damage})</p>
      <p>Páncél: {player.equipment.armor.name} (Védelem: {player.equipment.armor.defense})</p>
    </div>
  );
};

export default Player;
