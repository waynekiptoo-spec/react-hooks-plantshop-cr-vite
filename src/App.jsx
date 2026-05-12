import { useEffect, useState } from "react";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // FETCH PLANTS ON LOAD
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // HANDLE FORM INPUT
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // ADD NEW PLANT
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        setPlants([...plants, newPlant]);
        setFormData({ name: "", image: "", price: "" });
      });
  }

  // TOGGLE OUT OF STOCK (UI ONLY)
  function toggleStock(id) {
    const updated = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );
    setPlants(updated);
  }

  // SEARCH INPUT
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={handleSearch}
      />

      <PlantForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <PlantList
        plants={filteredPlants}
        toggleStock={toggleStock}
      />

    </div>
  );
}

export default App;