function PlantCard({ plant, toggleStock }) {
  return (
    <div>
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p>${plant.price}</p>

      <button onClick={() => toggleStock(plant.id)}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;