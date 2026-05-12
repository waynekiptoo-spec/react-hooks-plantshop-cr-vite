import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const { id, name, image, price, inStock } = plant;

  function handleToggle() {
    onToggleStock(id);
  }

  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{price}</p>

      <button onClick={handleToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;