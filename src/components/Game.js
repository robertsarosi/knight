import React, { useEffect, useState } from 'react';
import Map from './Map';
import Player from './Player';
import Enemy from './Enemy';
import Inventory from './Inventory';
import gameData from '../data/gameData.json';

const Game = () => {
  const [player, setPlayer] = useState(gameData.player);
  const [currentEnemy, setCurrentEnemy] = useState(gameData.enemies[0]);

  const attackEnemy = () => {
    const damage = player.equipment.weapon.damage;
    const updatedEnemy = { ...currentEnemy, hp: currentEnemy.hp - damage };

    if (updatedEnemy.hp <= 0) {
      alert(`${currentEnemy.name} legyőzve!`);
      setCurrentEnemy(gameData.enemies[1]); // Következő ellenség
    } else {
      setCurrentEnemy(updatedEnemy);
    }
  };

  return (
    <div>
      <h1>{player.name} - Level: {player.level}</h1>
      <div className="game">
        <Map />
        <Player player={player} />
        <Enemy enemy={currentEnemy} />
      </div>
      <button onClick={attackEnemy}>Támadás</button>
      <Inventory items={player.equipment} />
    </div>
  );
};

export default Game;
