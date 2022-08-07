import { resolveComponentProps } from "@mui/base";
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const PlantsFiltered = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  const PlantsMap = PlantsFiltered.map((plant) => {
    return (
      <PlantCard plant={plant} />
    )
  })

  // const PlantsSearched = plants.filter((plant) => {
  //   plant.name.includes(search.toLowerCase())
  //   console.log(plant)
  //   console.log(search)
  // })


  return (
    <ul className="cards">{PlantsMap}</ul>
  );
}

export default PlantList;
