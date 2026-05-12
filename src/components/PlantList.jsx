import PlantCard from "./PlantCard";

function PlantList({ plants, toggleStock }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          toggleStock={toggleStock}
        />
      ))}
    </div>
  );
}

export default PlantList;