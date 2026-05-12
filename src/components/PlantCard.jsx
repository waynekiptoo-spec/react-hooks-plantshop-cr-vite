import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const { id, name, image, price, inStock } = plant;

  function handleClick() {
    onToggleStock(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>Price: {price}</p>

      <button onClick={handleClick}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;