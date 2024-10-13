import React from 'react';
import gameData from '../data/gameData.json';

const tileSize = 50; // Minden mező mérete 50x50px

const Map = () => {
  const mapData = gameData.map;

  return (
    <div>
      {mapData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((tile, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: tileSize,
                height: tileSize,
                backgroundColor: tile === 'grass' ? 'green' : tile === 'forest' ? 'darkgreen' : 'gray',
                border: '1px solid black',
              }}
            >
              {tile}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;
