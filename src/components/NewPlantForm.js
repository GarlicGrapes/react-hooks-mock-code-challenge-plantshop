import React, {useState} from "react";

function NewPlantForm({plants}) {

  const emptyPlantItem = 
    {
      "name": "",
      "image": "",
      "price": 0
      }
  
  const [plantForm, setPlantForm] = useState(emptyPlantItem)

  function handlePlantFormChange(e) {
    const key = e.target.id
    setPlantForm({...plantForm, [key] : e.target.value })
    console.log(plantForm)
  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          id="name"
          name={plantForm.name} 
          placeholder="Plant name" 
          onChange={handlePlantFormChange}
        />
        <input 
          type="text" 
          id="image"
          name={plantForm.image} 
          placeholder="Image URL"
          onChange={handlePlantFormChange}
        />
        <input 
          type="number"
          id="price" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={handlePlantFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
