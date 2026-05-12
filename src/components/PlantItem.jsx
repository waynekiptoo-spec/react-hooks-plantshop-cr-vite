import React from "react";

function PlantItem({ plant, onToggleStock }) {
  return (
    <div data-testid="plant-item">
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.price}</p>

      <button onClick={() => onToggleStock(plant.id)}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantItem;