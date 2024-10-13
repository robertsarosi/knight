import React from 'react';

const Inventory = ({ items }) => {
  return (
    <div>
      <h3>Felszerelés:</h3>
      <p>Fegyver: {items.weapon.name} (Sebzés: {items.weapon.damage})</p>
      <p>Páncél: {items.armor.name} (Védelem: {items.armor.defense})</p>
    </div>
  );
};

export default Inventory;
