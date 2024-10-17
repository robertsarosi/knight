import React from 'react';
import gameData from '../data/gameData.json';

const tileSize = 50; // Minden mező mérete 50x50px

const Map = () => {
  const mapData = gameData.map;

  return (
    <div>
      {mapData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((tile, colIndex) => {
            // Ellenőrizd, hogy van-e érvényes image_bg
            const bgImage = tile.image_bg ? require(`../assets/map/Tile/${tile.image_bg}`) : null;

            // Ellenőrizd, hogy van-e érvényes image_structure
            const structureImage = tile.image_structure ? require(`../assets/map/Structure/${tile.image_structure}`) : null;

            return (
              <div
                key={colIndex}
                style={{
                  position: 'relative',  // A belső elemek pozicionálása
                  width: tileSize,
                  height: tileSize,
                  border: '1px solid black',
                }}
              >
                {/* Háttérkép megjelenítése, ha van */}
                {bgImage && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1,  // Háttér alul
                    }}
                  />
                )}

                {/* Struktúra kép megjelenítése, ha van */}
                {structureImage && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${structureImage})`,
                      backgroundSize: 'contain',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 2,  // Struktúra felül
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Map;
