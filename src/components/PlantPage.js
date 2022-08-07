import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
  
  const [search, setSearch] = useState("")
  
  return (
    <main>
      <NewPlantForm plants={plants}/>
      <Search plants={plants} search={search} setSearch={setSearch}/>
      <PlantList search = {search} plants={plants}/>
    </main>
  );
}

export default PlantPage;
